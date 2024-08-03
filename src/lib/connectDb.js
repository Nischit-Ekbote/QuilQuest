import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://nischit:vimal123@cluster0.t2qwtqn.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0";

let cachedConnection = null;

const connectDb = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }

    try {
        const connection = await mongoose.connect(MONGODB_URI);

        cachedConnection = connection;
        console.log("MongoDB connected successfully");
        return connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDb;