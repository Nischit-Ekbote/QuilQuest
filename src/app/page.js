'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home() { 
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setCursorVariant("hidden");
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    hidden: {
      height: 10,
      width: 10,
    },
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mousePos.x - 5, 
      y: mousePos.y - 5, 
      transition: {
        type: "spring",
        mass: 0.5
      }
    },
    hovered: {
      opacity: 1,
      backgroundColor: "green",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mousePos.x - 40, 
      y: mousePos.y - 40, 
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };
  
  return (
    <div 
      className={styles.container} 
      ref={ref} 
      onMouseEnter={() => setCursorVariant("default")}
      onMouseLeave={() => setCursorVariant("hidden")}
    >
      <div className={styles.mainDiv}>
        <h2>Welcome to</h2>
        <span>QUIL-QUEST</span>
        <h2>where stories and ideas come to life!</h2>
        <p>Feel free to personalize it further with your blog&apos;s name or a unique touch that reflects your style and content.</p>
        
        <Link 
          href="/posts" 
          onMouseEnter={() => setCursorVariant("hovered")}
          onMouseLeave={() => setCursorVariant("default")}
          className="PostBtn"
        >
          View all posts
        </Link>
      </div>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className={styles.circle}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mixBlendMode: 'difference',
        }}
        transition={spring}
      >
        {cursorVariant === 'hovered' && (
          <span>
          </span>
        )}
      </motion.div>
    </div>
  );
}