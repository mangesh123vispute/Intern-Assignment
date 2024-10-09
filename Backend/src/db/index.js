import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "MongoDB connected at DB HOST:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MongoDB connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;
