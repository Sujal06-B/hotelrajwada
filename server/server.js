import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import apiRouter from './routes/api.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const clientPublicDir = path.join(rootDir, 'client', 'public');
const uploadsDir = path.join(__dirname, 'uploads');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database (with resilient JSON fallback)
connectDB();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static Assets Serving
app.use(express.static(clientPublicDir));
app.use('/uploads', express.static(uploadsDir));

// API Routes
app.use('/api', apiRouter);

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const server = app.listen(PORT, () => {
  console.log(`\n👑 Yes Rajvada API Server is running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoints available at http://localhost:${PORT}/api/health\n`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
