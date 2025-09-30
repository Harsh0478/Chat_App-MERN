import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connection Established Successfully");
  } catch (error) {
    console.log("Error connecting to DB : ", error);
    process.exit(1);
  }
};
