'use client'

import { useUser } from "@/context/UserContext";
import PostCard from "@/Components/PostCard/PostCard"
import styles from "./posts.module.css"
import { usePathname } from "next/navigation";

export default function ClientsidePost({ posts }) {

    return (
        <div className={styles.container}> 
            {posts.map(post => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    )
}