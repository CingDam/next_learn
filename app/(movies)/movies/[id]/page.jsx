import React, { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../component/movie-videos";
import MovieVideo from "../../../../component/movie-videos";

async function getMovie(id){
    console.log(`Fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve,5000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id) {
    console.log(`Fetching videos: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve,5000))
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({params}){
    const {id} = await params
    // Parallel Request (병렬 요청)
    /* 
        Promise.all => 안에있는 배열형태의 함수나 promise객체를 한번에 다 실행후
                        모든 명령이 다 실행되면 반환하여 배열의 각 변수에 저장 

    */
    // const [movie,videos] = await Promise.all([getMovie(id),getVideos(id)])
    return (
    <>
       <div>
        {/* 
            suspense 방법 => 병렬 요청같은경우 다 요청이 완료가 안되면 데이터가 안 불러와짐
            suspense 방법은 컴퍼넌트로 분리하고 그걸 suspense태그에 넣어놓고 값을 컴포넌트한테 보내서
            각 컴포넌트한테 api를 요청하는 방법 => 이 방법은 병렬요청보다 더욱더 유연적임
            fallback속성을 사용하면 백엔드 서버에서 데이터를 불러오는 동안 보여줄 ui를 사용하면 됨 
         */}
         <h1>Movie Info</h1>
        <Suspense fallback={<h1>Lodaing movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        </div>
       <div>
       <h1>Movie Videos</h1>
        <Suspense fallback={<h1>Lodaing movie videos</h1>}>
            <MovieVideo id={id}/>
        </Suspense>
        </div>
    </>
)} 