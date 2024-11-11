import React from "react";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id){
    // await new Promise((resolve) => setTimeout(resolve,5000))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}


export default async function MovieInfo({id}){

    const movie = await getMovie(id);

    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path}/>
            <div>
                <h1 className={styles.title}>{movie.title}</h1>
                {/* .toFixed(value) value값 만큼 소수점 자름 */}
                <h3 >★ {movie.vote_average.toFixed(1)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                {/* target blank는 새창 */}
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}