"use client";

import { fetchApi } from "@/lib/client";
import { PostDto } from "@/type/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

    const handleSubmit = (e : any) =>{
        e.preventDefault();

        const form = e.target;

        const titleInput = form.title;
        const contentText = form.content;

        if(titleInput.value.length === 0){
            alert("제목을 입력해주세요.");
            titleInput.focus();
        }

        if(contentText.value.length === 0){
            alert("제목을 입력해주세요.");
            contentText.focus();
        }

        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleInput.value,
                content: contentText.value
            }),
        })
        .then((res) => res.json)
        .then((data) => {
            alert(data.toString);
        });
    };


    return (
        <>
            <h1>새 글 작성</h1>
            <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="제목"></input>
                <input type="text" name="content" placeholder="내용"></input>
                <button type="submit">저장</button>
            </form>
        </>
    );
  }
  