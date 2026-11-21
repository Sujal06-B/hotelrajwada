import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { protect } from '../middleware/authMiddleware.js';
import * as authController from '../controllers/authController.js';
import * as menuController from '../controllers/menuController.js';
import * as bookingController from '../controllers/bookingController.js';
import * as offerController from '../controllers/offerController.js';
import * as photoController from '../controllers/photoController.js';
import * as profileController from '../controllers/profileController.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.resolve(__dirname, '../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `rajwada-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({ success: true, timestamp: new Date().toISOString(), status: 'API Operational' });
});

// Auth
router.post('/auth/login', authController.login);
router.get('/auth/me', protect, authController.getMe);
router.put('/auth/password', protect, authController.updatePassword);

// Menu
router.get('/menu', menuController.getMenuItems);
router.post('/menu', protect, menuController.createMenuItem);
router.put('/menu/:id', protect, menuController.updateMenuItem);
router.delete('/menu/:id', protect, menuController.deleteMenuItem);

// Bookings & Enquiries
router.get('/bookings', protect, bookingController.getBookings);
router.post('/bookings', bookingController.createBooking); // Public booking endpoint
router.put('/bookings/:id', protect, bookingController.updateBookingStatus);
router.delete('/bookings/:id', protect, bookingController.deleteBooking);

// Offers
router.get('/offers', offerController.getOffers);
router.post('/offers', protect, offerController.createOffer);
router.put('/offers/:id', protect, offerController.updateOffer);
router.delete('/offers/:id', protect, offerController.deleteOffer);

// Photos
router.get('/photos', photoController.getPhotos);
router.post('/photos', protect, upload.single('image'), photoController.addPhoto);
router.delete('/photos/:id', protect, photoController.deletePhoto);

// Profile & Stats & Backup
router.get('/profile', profileController.getProfile);
router.put('/profile', protect, profileController.updateProfile);
router.get('/admin/stats', protect, profileController.getStats);
router.get('/admin/backup/export', protect, profileController.exportBackup);
router.post('/admin/backup/import', protect, profileController.importBackup);

export default router;

