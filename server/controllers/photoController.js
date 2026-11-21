import { dbStore } from '../models/dataStore.js';

export const getPhotos = async (req, res) => {
  try {
    const { category } = req.query;
    let photos = dbStore.get('photos') || [];

    if (category && category !== 'all') {
      photos = photos.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    res.json({ success: true, count: photos.length, data: photos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addPhoto = async (req, res) => {
  try {
    const { title, category, url } = req.body;
    let photoUrl = url;

    if (req.file) {
      photoUrl = `/uploads/${req.file.filename}`;
    }

    if (!photoUrl) {
      return res.status(400).json({ success: false, message: 'Photo image or URL is required' });
    }

    const photos = dbStore.get('photos') || [];
    const newPhoto = {
      id: `p-${Date.now()}`,
      title: title || 'Hotel Photo',
      category: category || 'Hotel',
      url: photoUrl,
      createdAt: new Date().toISOString()
    };

    photos.unshift(newPhoto);
    dbStore.set('photos', photos);

    res.status(201).json({ success: true, data: newPhoto });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    let photos = dbStore.get('photos') || [];
    const filtered = photos.filter(p => p.id !== id);

    if (filtered.length === photos.length) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }

    dbStore.set('photos', filtered);
    res.json({ success: true, message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

