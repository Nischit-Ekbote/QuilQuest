import { useUser } from '@/context/UserContext';
import { ServerPosts } from './ServerPosts'
import ClientsidePost from "./clientsidePost";


export default async function Page() {

    const posts = await ServerPosts();
    
    if (!posts) {
        return <div>Failed to load posts. Please try again later.</div>
    }

    return <ClientsidePost posts={posts} />
}