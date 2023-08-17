import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import { useEffect,useState } from 'react';
import {addMovieId,addMovieList} from './redux';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';


export default function ListPage(){
    
    const movieList = useSelector((state)=>state.movieList)
    const dispatch = useDispatch();
    
    useEffect(()=>fetchMovies()
    ,[])

    function fetchMovies(){
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MzhhMWFmMTExN2MxOWYyNTgwNWUzZWJkOWIzYiIsInN1YiI6IjY0ZGQ5YWVmYTNiNWU2MDEzOTAwN2MwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qs5fiWDuHpKXl_8fHxSijM5jqAnMtA5qUKQxO6Qfnk8'
        }
        };
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            dispatch(addMovieList(response.results));
            
        })
        .catch(err => console.error(err));
    }
return(
    <div style={{position:'relative',justifyItems:'right'}}>
            {movieList.map((movie)=>{
            return (
            <div className="card" key={movie.id}>
            <Card   sx={{padding:1}} onClick={()=>{dispatch(addMovieId(movie.id))}}>
                <img
                className='card-img'
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=" "
                title={movie.title}
                />
                
                <CardContent>
                <div className='title' gutterBottom variant="h5" component="div">
                    <b>{movie.title}</b>
                </div>
                <div className='rating' gutterBottom variant="h5" component="div">
                    {movie.vote_average}
                </div>
                <br/>
                <div className="card-text" color="text.secondary">
                    {movie.overview}
                    </div>
                </CardContent>
                
            </Card></div>
            );
        })}
        </div>

    )}
    