import mongoose from "mongoose";

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn}`);
}

export default connectDB;