"use client";

import { PostDto } from "@/type/post";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {

    const [posts, setPosts]  = useState<PostDto[]>([]);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        const posts = fetch(`${baseUrl}/api/v1/posts`)
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
        });
    },[])
   

    return (
  
        <div className="flex flex-col gap 6">
            <h1>글 목록</h1>
            {posts.length === 0 && <div>Loading...</div>}
            {posts.length > 0 && (
            <ul>
                {posts.map((post) =>( // 명시가 가능하다.
                    <li key={post.id} >
                        <Link href={`/posts/${post.id}`}>{post.id} : {post.title}</Link>
                    </li>
                ))}
            </ul>
            )}
        </div>
   
    );
  }
  