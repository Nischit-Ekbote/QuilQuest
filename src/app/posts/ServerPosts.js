import getPosts from "@/lib/actions"

export async function ServerPosts() {
    try {
        const posts = await getPosts({});
        // Serialize the posts
        const serializedPosts = posts.map(post => ({
            _id: post._id.toString(), // Convert ObjectId to string
            title: post.title,
            desc: post.desc,
            img: post.img,
            slug: post.slug,
            __v: post.__v
        }));
        return serializedPosts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return null;
    }
}