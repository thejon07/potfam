import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // put in .env

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = await mongoose.connect(MONGODB_URI, {
      dbName: 'Adidas',
      bufferCommands: false,
    }).then((mongoose) => {
      console.log('✅ MongoDB connected');
      return mongoose;
    }).catch((err) => {
      console.error('❌ MongoDB connection error:', err);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
