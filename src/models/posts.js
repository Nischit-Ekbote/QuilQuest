import { Schema , model , models } from "mongoose";

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,

    },
    img:{
        type:String,
        
    },
    slug:{
        type:String
    },
    user:{
        type:String
    }
});

const post = models.Post || model("Post",postSchema);

export default post