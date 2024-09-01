import { getPost } from '@/lib/actions';
import ImageComponent from '@/Components/ImageComponent/ImageComponent';
import styles from "./singlePage.module.css"
import Link from 'next/link';


async function SinglePostPage({ params }) {
  const { slug, singlePost } = params;
  let post; 
  
  try {
    post = await getPost({slug : singlePost});
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return <div>Error loading post. Please try again later.</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <ImageComponent src={post.img} alt={post.title} width={400} height={600} className={styles.image}/>
        </div>
      )}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.content}>{post.desc}</div>
        <Link href={`/users/${slug}/posts`}>Back</Link>
      </div>
    </div>
  );
}

export default SinglePostPage;