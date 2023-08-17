import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {deleteMovieId,updateMovieList} from './redux';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';


function Navbar(){
    const movieId = useSelector((state)=>state.movieId);
    const dispatch = useDispatch();

    function search(val){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MzhhMWFmMTExN2MxOWYyNTgwNWUzZWJkOWIzYiIsInN1YiI6IjY0ZGQ5YWVmYTNiNWU2MDEzOTAwN2MwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qs5fiWDuHpKXl_8fHxSijM5jqAnMtA5qUKQxO6Qfnk8'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => dispatch(updateMovieList(response.results)))
            .catch(err => console.error(err));
    }

    return(<div className="Apps">
            {movieId==0?<Paper component="form" sx={{ p: '2px 4px',  width:500,maxWidth:'80%' ,float:'left',backgroundColor:'#9B9B9B'}}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"><SearchIcon /></IconButton>
            <InputBase sx={{ ml: 1, flex: 1, width:500,maxWidth:'80%' }} placeholder="Search " inputProps={{ 'aria-label': 'search' }} 
            onChange={(e)=>{
                var val=e.target.value;
                if (val.length>0)search(val);
                }}/>
            
            </Paper>:<Box sx={{m: 2, float:'left'}}><ArrowBackIcon style={{width:50}} onClick={()=>dispatch(deleteMovieId())} /><b style={{m:5}}>Movie Details</b></Box>}
            <Box sx={{m: 2, float:'right'}}><HomeIcon onClick={()=>dispatch(deleteMovieId())} /></Box>
        </div>
)}
export default Navbar;