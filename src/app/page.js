import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import connectDb from "@/lib/connectDb"; 
import Post from "@/models/posts"; 


export default async function Home() {
  
  return (
    <div style={{ height: "calc(100vh - 100px)", display: "grid", placeItems: "center" }}>
      <div className={styles.mainDiv}>
        <h2>Welcome to </h2><br />
        <span>QUIL-QUEST</span><br />
        <h2> where stories and ideas come to life!</h2>
        <p>Feel free to personalize it further with your blog&apos;s name or a unique touch that reflects your style and content.</p>
        
        <Link href="/posts">View all posts</Link>
      </div>
    </div>
  );
}