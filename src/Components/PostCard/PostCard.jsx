import Image from "next/image";
import "./postCard.css"
import Link from "next/link";
import ImageComponent from "../ImageComponent/ImageComponent";


function PostCard({post}) {

  const slug = post.slug;


  return (
    <div className="component">
        <ImageComponent src={post.img} alt={post.title} width={250} height={350}  />

        <p>{post.title}</p>
        <Link href={`posts/${slug}`}>Read More</Link>
    </div>
  )
}

export default PostCard