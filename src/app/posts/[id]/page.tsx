"use client";

import { fetchApi } from "@/lib/client";
import { PostDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    
    const { id } = useParams();
    const[post, setPost] = useState<PostDto | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        const post = fetchApi(`/api/v1/posts/${id}`)
        .then((data) => {
            setPost(data);
        });
    },[])
   

    return (
        <div className="flex-col gap-8">
           {post === null && <div>Loading...</div>}
           {post !== null && (
            <div>
            <h1>글 상세보기</h1>
            <div>번호 : {post.id}</div>
            <div>제목 : {post.title}</div>
            <div>내용 : {post.content}</div>
            <div>작성일자 : {post.createDate}  || 수정일자 : {post.modifyDate}</div>
            </div>
           )}
        </div>
   
    );
  }
  