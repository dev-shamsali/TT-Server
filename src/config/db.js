import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection successfull");
  } catch (error) {
    console.error(error);
    console.log("MongoDB connection error");
    process.exit(1);
  }
};

export default connectDB;
