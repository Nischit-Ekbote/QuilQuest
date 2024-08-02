import React, { useRef, useState } from 'react';
import { setPosts } from '@/lib/actions'; 
import Image from 'next/image';
import styles from "./createPost.module.css"

const CustomImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

function Post() {
  const formRef = useRef();
  const [imgUrl, setImgUrl] = useState("");

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const desc = formData.get('desc');
    const img = formData.get('image');

    console.log({ title, desc, img });

    try {
      // Assuming setPosts is an async function that handles post creation
      const result = await setPosts({ title, desc, img });
      console.log(result);
      if (result.msg) {
        formRef.current.reset(); 
        setImgUrl("");
      }
    } catch (error) {
      console.error('Error creating post:', error);
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
            />
          </div>
          {imgUrl && (
              <div>
                  <Image 
                  loader={CustomImageLoader}
                  src={imgUrl} 
                  alt="Image Preview" 
                  width={300} 
                  height={500} 
                  onError={() => setImgUrl('')} // Reset the image URL if the image fails to load
                  />
              </div>
              )}
        </div>

        <div className={styles.textContainer}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>

          <div className={styles.descBox}>
            <label htmlFor="desc" >Description</label>
            <input type="text" id="desc" name="desc" />
          </div>
          <button type="submit">Submit</button>

        </div>
        

      </form>
    </div>
  );
}

export default Post;
