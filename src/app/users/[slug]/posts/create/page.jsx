'use client'
import { useState, useEffect } from "react";
import setPosts from "@/lib/actions"
import Post from "@/Components/Post/post";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
// import Image from 'next/image';

export default function CreatePost({params : {slug}}) {
    
    const {isUser , setIsUser} = useUser();
    console.log(slug)
    return (
        <div>
            {isUser ? <Post user={slug}/> : 
            <div>
                <h3>Not a Valid User Pls Login</h3>
               <Link href="/login">Login</Link> 
            </div>}
            
        </div>
    );
}