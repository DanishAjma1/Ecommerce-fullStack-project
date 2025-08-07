import mongoose from "mongoose";
import { config } from "dotenv";
config();

const DBConnection = async() => {
  try {
    const DB_URL = process.env.DB_URL;
    if (!DB_URL) {
      throw new Error('DB_URL environment variable is not defined');
    }
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully.");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default DBConnection;