'use client'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@/context/UserContext';

function page() {
  const { isUser, setIsUser ,userName } = useUser();
  return (
    <Link href={`/users/${userName}/posts`}>Posts</Link>
  )
}

export default page