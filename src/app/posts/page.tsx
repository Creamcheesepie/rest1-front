"use client";

import { useEffect, useState } from "react";

export default function Home() {

    const [posts, setPosts]  = useState<{id: number, title: string}[]>([]);

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
                        {post.id} : {post.title}
                    </li>
                ))}
            </ul>
            )}
        </div>
   
    );
  }
  