"use client";

import { PostDto } from "@/type/post";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {

    const [posts, setPosts]  = useState<PostDto[]>([]);

    useEffect(() => {
        const posts = fetch("http://localhost:8080/api/v1/posts")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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
  