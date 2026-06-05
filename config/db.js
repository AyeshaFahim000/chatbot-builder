import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
            minPoolSize: 2,
        });
        console.log(`MongoDB Connected: ${mongoose.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
export default connectDB;