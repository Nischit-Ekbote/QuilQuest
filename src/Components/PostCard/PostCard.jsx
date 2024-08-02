import Image from "next/image";
import "./postCard.css"
import Link from "next/link";
import ImageComponent from "../ImageComponent/ImageComponent";


function PostCard({post}) {

  const slug = post.slug;


  return (
    <div className="component">
        <ImageComponent src={post.img} alt={post.alt} width={250} height={350}  />
        {/* <img src={post.img} alt={post.title} className="postAvatar"/> */}
        <p>{post.title}</p>
        <Link href={`posts/${slug}`}>Read More</Link>
    </div>
  )
}

export default PostCard