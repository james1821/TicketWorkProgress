import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedConnection = null;

async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const db = await mongoose.connect(MONGODB_URI, options);
  cachedConnection = db;
  return db;
}

export default dbConnect;
