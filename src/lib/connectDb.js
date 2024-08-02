import mongoose from "mongoose";


const connectDb = async ()=>{
    try {
        if(mongoose.connections[0].readyState)
        {
            console.log("Already Connected")
            return;
        }
        await mongoose.connect("mongodb://localhost:27017/Blogs");
        console.log("Connection Success")
    } catch (error) {
        console.log("Failed to connect");
        throw new Error(error);
    }
}

export default connectDb