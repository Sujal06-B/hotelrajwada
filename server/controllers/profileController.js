import { dbStore } from '../models/dataStore.js';

export const getProfile = async (req, res) => {
  try {
    const profile = dbStore.get('profile') || {};
    const branches = dbStore.get('branches') || [];

    // Calculate open/closed status based on opening and closing hours
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const totalMinutes = currentHour * 60 + currentMin;

    const openMinutes = (profile.openingHour || 11) * 60;
    const closeMinutes = (profile.closingHour || 23) * 60;
    const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;

    res.json({
      success: true,
      data: {
        ...profile,
        isOpen,
        branches,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const current = dbStore.get('profile') || {};
    const updated = { ...current, ...req.body };
    dbStore.set('profile', updated);

    if (req.body.branches) {
      dbStore.set('branches', req.body.branches);
    }

    res.json({ success: true, message: 'Profile updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const enquiries = dbStore.get('enquiries') || [];
    const photos = dbStore.get('photos') || [];
    const menu = dbStore.get('menu') || [];
    const offers = dbStore.get('offers') || [];

    const activeOffers = offers.filter(o => o.active !== false).length;
    const pendingEnquiries = enquiries.filter(e => e.status === 'New').length;

    res.json({
      success: true,
      data: {
        totalEnquiries: enquiries.length,
        pendingEnquiries,
        totalPhotos: photos.length,
        totalMenu: menu.length,
        activeOffers,
        recentEnquiries: enquiries.slice(0, 5),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const exportBackup = async (req, res) => {
  try {
    const raw = dbStore.data;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="yes-rajvada-backup.json"');
    res.send(JSON.stringify(raw, null, 2));
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const importBackup = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ success: false, message: 'Invalid backup JSON payload' });
    }

    for (const key of Object.keys(payload)) {
      dbStore.data[key] = payload[key];
    }
    dbStore.save();

    res.json({ success: true, message: 'Data successfully restored from backup' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

