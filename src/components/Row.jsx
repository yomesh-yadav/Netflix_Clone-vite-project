import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/row.css'
const original_add="https:api.themoviedb.org/3";

const baseUrl ="https://image.tmdb.org/t/p/original/"

function Row(props) {
const [data,setData]= useState([]);

let url=`${original_add}${props.url}`;
useEffect(() => {
  
  async function fetchData(){
    const res= await axios.get(url);
    setData((res.data.results))
  }
  fetchData();
}, [url])

console.log(data);
  return (
    <div className='row'>
        <h3>{props.title}</h3>
        <div className='row__posters'>
        {data.map((e)=>(
            <img 
                className= {props.isLarge?'row__poster_large':'row__poster'}
                key={e.id}
                src= {`${baseUrl}${e.poster_path}`}
                
            />
        ))}
        </div>
    </div>
  )
}

export default Row