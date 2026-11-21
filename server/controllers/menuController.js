import { dbStore } from '../models/dataStore.js';

export const getMenuItems = async (req, res) => {
  try {
    const { category, dietary } = req.query;
    let menu = dbStore.get('menu') || [];

    if (category && category !== 'all') {
      menu = menu.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    if (dietary && dietary !== 'all') {
      menu = menu.filter(item => item.dietary === dietary);
    }

    res.json({ success: true, count: menu.length, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const { name, marathiName, category, price, description, isAvailable, image, dietary } = req.body;
    if (!name || !category || price === undefined) {
      return res.status(400).json({ success: false, message: 'Name, category, and price are required' });
    }

    const menu = dbStore.get('menu') || [];
    const newItem = {
      id: `menu-${Date.now()}`,
      name: name.trim(),
      marathiName: marathiName ? marathiName.trim() : '',
      category: category.trim(),
      price: Number(price),
      description: description ? description.trim() : '',
      isAvailable: isAvailable !== false,
      image: image || '/rajvada-entrance.webp',
      dietary: dietary || (category.toLowerCase().includes('non-veg') ? 'nonveg' : 'veg'),
      createdAt: new Date().toISOString()
    };

    menu.unshift(newItem);
    dbStore.set('menu', menu);

    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = dbStore.get('menu') || [];
    const index = menu.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }

    menu[index] = { ...menu[index], ...req.body, id };
    dbStore.set('menu', menu);

    res.json({ success: true, data: menu[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    let menu = dbStore.get('menu') || [];
    const filtered = menu.filter(item => item.id !== id);

    if (filtered.length === menu.length) {
      return res.status(404).json({ success: false, message: 'Menu item not found' });
    }

    dbStore.set('menu', filtered);
    res.json({ success: true, message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

