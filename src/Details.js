import * as React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

export default function Details(){
    const [detail,setDetail]=useState([]);
    const movieId = useSelector((state)=>state.movieId);
    useEffect(()=>fetchDetail(movieId)
    ,[])

    function fetchDetail(id){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MzhhMWFmMTExN2MxOWYyNTgwNWUzZWJkOWIzYiIsInN1YiI6IjY0ZGQ5YWVmYTNiNWU2MDEzOTAwN2MwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qs5fiWDuHpKXl_8fHxSijM5jqAnMtA5qUKQxO6Qfnk8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setDetail(response))
            .catch(err => console.error(err));
    }
    return(
        <div className='detailCard'>
            
            <img className='detailImg' src={`https://image.tmdb.org/t/p/original${detail.poster_path}` } alt=" "/>
            
            <div className='movieDetail'>
                <div className='movieTitle'><b>{detail.title}</b> ({detail.vote_average})</div>
                
                <div>{detail.release_date} | {detail.runtime} | {detail.director?detail.director:'NA'}</div>
                <div>Cast:{detail.cast?JSON.stringify(detail.cast):'NA'}</div>
                <div>
                    Description:{detail.overview}
                </div>
            </div>
            
        </div>
    )
}