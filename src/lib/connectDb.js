import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already Connected");
            return;
        }
        await mongoose.connect("MONGODB_URI=mongodb+srv://nischit:vimal123@cluster0.t2qwtqn.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connection Success");
    } catch (error) {
        console.log("Failed to connect");
        throw new Error(error);
    }
}

export default connectDb;