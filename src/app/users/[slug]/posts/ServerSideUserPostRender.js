'use server'
import { getPosts } from '@/lib/actions';

async function ServerSideUserPostRender({user}) {
  console.log(user)
  try {
    const posts = await getPosts({});
    return <div>{JSON.stringify(posts)}</div>;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return <div>Error fetching posts</div>;
  }
}

export default ServerSideUserPostRender; 