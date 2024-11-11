import React from "react";
import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
    console.log(`Fetching videos: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve,5000))
    // throw new Error('something wrong!')
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieVideo({id}){
    const video = await getVideos(id);
    return <h6>{JSON.stringify(video)}</h6>
}