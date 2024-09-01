'use client'

import Image from "next/image";
import style from "./postCard.module.css"
import Link from "next/link";
import ImageComponent from "../ImageComponent/ImageComponent";
import { useState } from "react";
import { useRouter } from 'next/navigation';

function PostCard({post}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const slug = post.slug;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/posts/${slug}`);
  };

  return (
    <div className={style.component}>
      <div 
        className={style.meta__data} 
        style={{
          border: '1px solid #585858',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Link 
          href={`/posts/${slug}`} 
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <ImageComponent src={post.img} alt={post.title} width={270} height={370} />
        </Link>

        <div className={style.meta__data__text}>
          <div>
            <p className={style.title}>{post.title}</p>
            <p className={style.description}>{post.desc}</p>
          </div>
          <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            style={{
              border: '1px solid #585858',
              backgroundColor: isHovered ? 'black' : '#E3D7C0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '100%',
              padding: '5px 7px 0px 7px',
              transition: 'background-color 0.3s ease-in-out',
            }}
          >
            <Link href={`/posts/${slug}`} onClick={handleClick}>
              <ImageComponent 
                src={isHovered ? '/Arrows/arrow-top-right-large-green.svg' : '/Arrows/arrow-right-large-black.svg'} 
                alt='' 
                height={25} 
                width={25}
                style={{ transition: 'opacity 0.3s ease-in-out' }}
              />
            </Link>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard