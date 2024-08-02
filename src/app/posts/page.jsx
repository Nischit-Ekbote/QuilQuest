import PostCard from "@/Components/PostCard/PostCard"
import getPosts from "@/lib/actions"
import styles from "./posts.module.css"

async function Page() {
    try {
        const posts = await getPosts();
        
        return (
            <div className={styles.container}>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        )
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return <div>Failed to load posts. Please try again later.</div>
    }
}

export default Page