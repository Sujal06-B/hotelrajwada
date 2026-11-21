import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const dataDir = path.resolve(__dirname, '../data');
export const dataFilePath = path.join(dataDir, 'store.json');

let isMongoConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel_rajwada';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500,
    });
    isMongoConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.log(`⚠️  Local/Remote MongoDB not active (${error.message}).`);
    console.log(`⚡ Activated Resilient JSON Persistent Engine at ${dataFilePath}`);
  }
};

export const getDbStatus = () => ({
  mode: isMongoConnected ? 'mongodb' : 'json_persistence',
  connected: isMongoConnected,
});

