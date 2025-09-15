"use client";

import { fetchApi } from "@/lib/client";
import { PostDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    
    const router = useRouter();
    const { id } = useParams();
    const[post, setPost] = useState<PostDto | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        const post = fetchApi(`/api/v1/posts/${id}`)
        .then((data) => {
            setPost(data);
        });
    },[])

    const deletePost = (id: number) => {
        fetchApi(`/api/v1/posts/${id}`,
            {method : "DELETE"}
        )
        .then((data) => {
            alert(data.msg);
            router.replace("/posts");
        });
    };

    if(post === null) {
        return <div>Loading...</div>;
    }
   

    return (
        <>  
            <div>
                <h1>글 상세보기</h1>
                <div>번호 : {post.id}</div>
                <div>제목 : {post.title}</div>
                <div>내용 : {post.content}</div>
                <div>작성일자 : {post.createDate}  || 수정일자 : {post.modifyDate}</div>
            </div>
            <div className="flex gap-4">
                <Link className="border p-2 rounded" href={'/posts/${post.id}/edit}'}>수정</Link>
                    <button className="border p-2 rounded" onClick={() => deletePost(post.id)}>삭제</button>
            </div>
        </>
        
   
    );
  }
  