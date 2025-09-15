"use client";

import { PostDto } from "@/type/post";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchApi } from "@/lib/client";
export default function Home() {

    const [posts, setPosts]  = useState<PostDto[] | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        const posts = fetchApi("/api/v1/posts")
        .then((data) => {
            setPosts(data);
        });
    },[])
   

    return (
        <div>
          
            <h1>글 목록</h1>
            {posts === null && <div>Loading...</div>}
            {posts !== null && posts.length === 0 && <div>글이 없습니다.</div>}
            {posts !== null && posts.length > 0 && (
            <ul>
                {posts.map((post) =>( // 명시가 가능하다.
                    <li key={post.id} >
                        <Link href={`/posts/${post.id}`}>{post.id} : {post.title}</Link>
                    </li>
                ))}
            </ul>
            )}
    
            <div>
                <Link href="/posts/write">새 글 작성</Link>
            </div>
        </div>
   
    );
  }
  