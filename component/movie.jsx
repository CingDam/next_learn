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
                {/* prfetch를 추가하면 배포 할 때 fetch를 자동을 실행 */}
                <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}