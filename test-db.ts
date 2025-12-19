import dotenv from 'dotenv';
import { connectToDatabase } from './database/mongoose';

dotenv.config();

async function testConnection() {
  try {
    await connectToDatabase();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
}

testConnection();