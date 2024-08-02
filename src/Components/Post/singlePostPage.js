
import { getPost } from '@/lib/actions';
import styles from "./singlePage.module.css"


export const dynamic = 'force-dynamic';

async function SinglePostPage({ params }) {
//   const { slug } = params;
//   let post;
  
//   try {
//     post = await getPost({slug});
//   } catch (error) {
//     console.error("Failed to fetch post:", error);
//     return <div>Error loading post. Please try again later.</div>;
//   }

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

  return (
    <div className={styles.container}>
      {/* {post.img && (
        <div className={styles.imgContainer}>
          <Image 
            loader={pexelsLoader}
            src={post.img}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.img}
          />
        </div>
      )} */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;