
import getPosts, { getPostsByUser } from '@/lib/actions';
import ServerSideUserPostRender from './ServerSideUserPostRender';
import PostCard from '@/Components/PostCard/PostCard';
import styles from './posts.module.css'

async function Page({params : {slug}}) {

    const posts = await getPostsByUser({user:slug});
   
    return(
        <div className={styles.container}>
           {posts.map(post => (
                <PostCard key={post._id} post={post} /> 
            ))}
        </div>
    );
}

export default Page;