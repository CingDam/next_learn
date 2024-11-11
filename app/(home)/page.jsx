//root segement => 제일 처음 보일페이지
import React from "react";
import Link from 'next/link';
import Movie from "../../component/movie";
import styles from '../../styles/home.module.css'

export const metadata = {
    title : "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

/*

    기존의 react같은 csr은 페이지를 새로고침 할 때마다 fetch를 실행
    fetch가 다 되기 전 까지는 사용할 수 없으므로 상태 변환(로딩중)이 필요했음
    하지만 Next는 SSR이므로 아래와 같이 사용하다면
    Next가 자동적으로 fetch를 한번 실행하고 저장해놓은 상태이므로 로딩중같은
    상태변환이 필요없어지게 됨 

*/

async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve,1000))
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

//자식 함수에 비동기 함수를 하면 부모도 비동기 함수를 해야 함
//async을 쓰는이유 => next가 브라우저를 실행할 때 await부분을 안받아 오면 대기중인것을 표시
// => 대기중일 때의 html의 일부를 보여주기 위해 loading.jsx를 찾아서 먼저 보여줘서 비동기 적인 방식을 사용
export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie 
                key={movie.id} 
                id={movie.id} 
                poster_path={movie.poster_path}
                title={movie.title}
                />
            ))}
        </div>
    );
}