import { Schema , model , models } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    password:{
        type:String,

    }
},{timestamps:true});

const user = models.User || model("User",userSchema);

export default user