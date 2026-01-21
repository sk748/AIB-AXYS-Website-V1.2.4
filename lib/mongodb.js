import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URL environment variable');
}

// Prevent MongoDB connection during build phase
if (process.env.NEXT_PHASE === 'phase-production-build') {
  console.log('⚠️ Skipping MongoDB connection during build phase');
  // Export a dummy function that throws if accidentally called during build
  const dummyConnect = () => {
    throw new Error('MongoDB connection attempted during build. This should not happen.');
  };
  export default dummyConnect;
} else {
  let cached = global.mongoose;

  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  async function connectDB() {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log('✅ MongoDB connected successfully');
        return mongoose;
      });
    }

    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }

    return cached.conn;
  }

  export default connectDB;
}
