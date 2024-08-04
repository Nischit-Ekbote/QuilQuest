// src/lib/actions.js
'use server'
import connectDb from "./connectDb";
import Post from "../models/posts";
import User from "../models/users";
import SpaceConverter from "./spaceConvertor";

export default async function getPosts(){
  try {
    await connectDb();
    const res = await Post.find({});
    return res;
  } catch (error) {
    console.error("Failed to get posts", error);
    throw error;
  }
};

export async function getPost({slug}){
  try {
    await connectDb();
    const res = await Post.findOne({slug});
    return res;
  } catch (error) {
    console.error("Failed to get post", error);
    throw error;
  }
};

export async function setPosts({ title, desc, img }){
  const slug = SpaceConverter(title);
  try {
    await connectDb();
    const newPost = await new Post({ title, desc, img ,slug});
    await newPost.save();
    return { success: true };
  } catch (err) {
    console.error("Failed to insert post", err);
    throw err;
  }
};

export async function setUser({ name, email, password }){
  try {
    await connectDb();
    const newUser = await new User({ name, email, password});
    await newUser.save();
    return { success: true };
  } catch (err) {
    console.error("Failed to create user", err);
    throw err;
  }
};

export async function validateData({ name, password }) {
  try {
    await connectDb();

    const user = await User.findOne({ name, password }); 

    if (user) {
      return { msg: 'Login Successful' }; 
    } else {
      return { msg: 'Invalid' }; 
    }
  } catch (err) {
    console.error('Error validating data:', err);
    throw err; 
  }
}
