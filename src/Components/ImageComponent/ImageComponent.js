'use client';

import Image from 'next/image';
import { useState } from 'react';

const CustomImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function ImageComponent({ src, alt, width, height }) {
  const [error, setError] = useState(false);

  if (!src) return null; // or return a placeholder image

  const updatedSrc = src.startsWith('http://localhost:3000/')
    ? src.replace('http://localhost:3000/', '/')
    : src;

  if (error) {
    return <div>Image failed to load</div>;
  }

  return (
    <Image 
      loader={CustomImageLoader}
      src={updatedSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => setError(true)}
    />
  );
}