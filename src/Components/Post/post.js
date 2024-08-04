import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { setPosts } from '@/lib/actions'; 
import Image from 'next/image';
import styles from "./createPost.module.css"
import SpaceConverter from '@/lib/spaceConvertor';

const CustomImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

function Post() {
  const formRef = useRef();
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const desc = formData.get('desc');
    const img = formData.get('image');

    if (!title || !desc || !img) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    try {
      const result = await setPosts({ title, desc, img });
      if (result.success) {
        formRef.current.reset(); 
        const slug = SpaceConverter(title);
        setImgUrl("");
        setLink(
          <div>
            <p>Post Created Successfully</p>
            <Link href={`/posts/${slug}`}>View Post</Link>
          </div>
        );
      } else {
        setError('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setError('An error occurred while creating the post');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.imgBlock}>
          <div>
            <label htmlFor="image">Image URL</label>
            <input 
              type="text" 
              id="image" 
              name="image" 
              value={imgUrl} 
              onChange={(evt) => setImgUrl(evt.target.value)} 
              aria-describedby="imageHelp"
            />
            {/* <small id="imageHelp" className={styles.formHelp}>Enter a valid image URL</small> */}
          </div> 
          {imgUrl && (
            <div className={styles.imagePreview}>
              <Image 
                loader={CustomImageLoader}
                src={imgUrl} 
                alt="Image Preview" 
                width={300} 
                height={200} 
                onError={() => setImgUrl('')} 
                layout="responsive"
              />
            </div>
          )}
        </div>

        <div className={styles.textContainer}>
          <div>
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              required 
              aria-describedby="titleHelp"
            />
            <small id="titleHelp" className={styles.formHelp}>Enter a title for your post</small>
          </div>

          <div className={styles.descBox}>
            <label htmlFor="desc">Description</label>
            <textarea 
              id="desc" 
              name="desc" 
              required
              aria-describedby="descHelp"
            ></textarea>
            <small id="descHelp" className={styles.formHelp}>Provide a description for your post</small>
          </div>
          
          <button type="submit" disabled={isLoading} className={styles.submitButton}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        
        {error && <p className={styles.error}>{error}</p>}
        {link && <div className={styles.successLink}>{link}</div>}
      </form>
    </div>
  );
}

export default Post;