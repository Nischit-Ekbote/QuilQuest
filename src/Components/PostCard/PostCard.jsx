import Image from "next/image";
import "./postCard.css"
import Link from "next/link";


function PostCard({post}) {

  const slug = post.slug;


  return (
    <div className="component">
        <img src={post.img} alt={post.title} className="postAvatar"/>
        <p>{post.title}</p>
        <Link href={`posts/${slug}`}>Read More</Link>
    </div>
  )
}

export default PostCard