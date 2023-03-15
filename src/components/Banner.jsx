import React, { useState,useEffect } from 'react'
import requests from '../requests'
const baseUrl ="https://image.tmdb.org/t/p/original/"
import axios from 'axios';
import '../CSS/banner.css'

function Banner() {

    const [movie,setMovie]=useState({});

    useEffect(() => {
        async function fetchData(){
            const res =await axios.get(`${"https:api.themoviedb.org/3"}${requests.fetchTrending}`)
            const val = res.data.results
            setMovie(val[0])
            // console.log(val[0])
            // urlLink=`${baseUrl}${val[0].backdrop_path}`
        }
        fetchData();
      
    }, [])  
    
  return (

        // <div>
        //     hello world
        // </div>
        <div className="banner"
         style={{
          backgroundSize: "cover",
          backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
          backgroundPosition: "center center"}}>
            {/* <h1>hello world</h1> */}
            <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {/* {truncate(?.overview, 150)} */}
        </h1>
      </div>
      {/* <div className="banner--fadeBottom" /> */}
        </div>
  )
}

export default Banner