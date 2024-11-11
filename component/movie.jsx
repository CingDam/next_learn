"use client"

import React from "react";
import Link from 'next/link';
import styles from'../styles/movie.module.css'
import { useRouter } from "next/navigation";

export default function Movie({title, id, poster_path}){
    // 라우티 기능 추가 = react router dom
    const router = useRouter();
    const imageClick = () => {
        router.push(`/movies/${id}`)
    }
    return (
        <div className={styles.movie}>
                <img src={poster_path} alt={title} onClick={imageClick}/>
                <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}