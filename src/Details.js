import * as React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSpinner } from './redux';
import {useParams} from 'react-router-dom';

export default function Details(){
    const [detail,setDetail]=useState([]);
    const params = useParams();
    
    
    useEffect(()=>fetchDetail()
    ,[])
    const dispatch = useDispatch()

    function fetchDetail(){
        const id = params.movieId;
        dispatch(toggleSpinner(true));
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MzhhMWFmMTExN2MxOWYyNTgwNWUzZWJkOWIzYiIsInN1YiI6IjY0ZGQ5YWVmYTNiNWU2MDEzOTAwN2MwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qs5fiWDuHpKXl_8fHxSijM5jqAnMtA5qUKQxO6Qfnk8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setDetail(response);
                dispatch(toggleSpinner(false))})
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