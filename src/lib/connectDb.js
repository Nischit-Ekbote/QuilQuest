import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already Connected");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Success");
    } catch (error) {
        console.log("Failed to connect");
        throw new Error(error);
    }
}

export default connectDb;