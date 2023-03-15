import React from 'react';
import Row from './Row';
import requests from '../requests';

function MainRow() {
  return (
    <div><Row 
    title="Trending"
    url ={requests.fetchTrending}
    isLarge="true"
    />
    <Row 
    title="ActionMovies"
    url ={requests.fetchActionMovies}
    />
    <Row 
    title="ComedyMovies"
    url ={requests.fetchComedyMovies}
    />
    <Row 
    title="Documantaries"
    url ={requests.fetchDocumantaries}
    />
    <Row 
    title="HorrorMovies"
    url ={requests.fetchHorrorMovies}
    />
    <Row 
    title="NetflixOriginals"
    url ={requests.fetchNetflixOriginals}
    />
    <Row 
    title="RomanceMovies"
    url ={requests.fetchRomanceMovies}
    />
    <Row 
    title="TopRated"
    url ={requests.fetchTopRated}
    /></div>
  )
}

export default MainRow