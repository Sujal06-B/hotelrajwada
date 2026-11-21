import { dbStore } from '../models/dataStore.js';

export const getOffers = async (req, res) => {
  try {
    const { activeOnly } = req.query;
    let offers = dbStore.get('offers') || [];
    if (activeOnly === 'true') {
      offers = offers.filter(o => o.active !== false);
    }
    res.json({ success: true, count: offers.length, data: offers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createOffer = async (req, res) => {
  try {
    const { title, code, discount, description, active, validUntil } = req.body;
    if (!title || !discount) {
      return res.status(400).json({ success: false, message: 'Title and discount are required' });
    }

    const offers = dbStore.get('offers') || [];
    const newOffer = {
      id: `off-${Date.now()}`,
      title: title.trim(),
      code: code ? code.trim().toUpperCase() : 'SPECIAL',
      discount: discount.trim(),
      description: description ? description.trim() : '',
      active: active !== false,
      validUntil: validUntil || '2026-12-31',
      createdAt: new Date().toISOString()
    };

    offers.unshift(newOffer);
    dbStore.set('offers', offers);
    res.status(201).json({ success: true, data: newOffer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOffer = async (req, res) => {
  try {
    const { id } = req.params;
    const offers = dbStore.get('offers') || [];
    const index = offers.findIndex(o => o.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Offer not found' });
    }

    offers[index] = { ...offers[index], ...req.body, id };
    dbStore.set('offers', offers);
    res.json({ success: true, data: offers[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;
    let offers = dbStore.get('offers') || [];
    const filtered = offers.filter(o => o.id !== id);

    if (filtered.length === offers.length) {
      return res.status(404).json({ success: false, message: 'Offer not found' });
    }

    dbStore.set('offers', filtered);
    res.json({ success: true, message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

