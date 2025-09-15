"use client";

import { fetchApi } from "@/lib/client";
import { PostDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    
    const router = useRouter();

    const handleSubmit = (e : any) =>{
        e.preventDefault();

        const form = e.target;

        const titleInput = form.title;
        const contentText = form.content;

        if(titleInput.value.length === 0){
            alert("제목을 입력해주세요.");
            titleInput.focus();
        }
        if(titleInput.value.lenght < 2){
            alert("제목은 2글자 이상입니다.");
            titleInput.focus();
        }

        if(titleInput.value.lenght )

        if(contentText.value.length === 0){
            alert("제목을 입력해주세요.");
            contentText.focus();
        }

        fetchApi(`/api/v1/posts`,{
            method: "POST", 
            body: JSON.stringify({
                title: titleInput.value,
                content: contentText.value
            }),
        })
        .then((data) => {
            alert(data.msg);
            router.replace(`/posts/${data.data.postDto.id}`);
        });
    };


    return (
        <>
            <h1>새 글 작성</h1>
            <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
                <input className="border border-gray-3000 rounded p-2"
                type="text" name="title" placeholder="제목"
                maxLength={20}
                 />
                <input className="border border-gray-3000 rounded p-2 h-20" 
                type="text" name="content" placeholder="내용"
                maxLength={100}
                />
                <button  className="border border-gray-3000 rounded p-2"
                type="submit">저장</button>
            </form>
        </>
    );
  }
  