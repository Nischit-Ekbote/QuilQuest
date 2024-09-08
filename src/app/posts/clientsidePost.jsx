'use client'

import PostCard from "@/Components/PostCard/PostCard"
import styles from "./posts.module.css"

export default function ClientsidePost({ posts }) {

    return (
        <div className={styles.container}> 
            {posts.map(post => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    )
}