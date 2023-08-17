import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';

function navbar(){
    return(<div className="Apps">
            <Paper component="form" sx={{ p: '2px 4px',  width:500,maxWidth:'80%' ,float:'left',backgroundColor:'#9B9B9B'}}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"><SearchIcon /></IconButton>
            <InputBase sx={{ ml: 1, flex: 1, width:500,maxWidth:'80%' }} placeholder="Search " inputProps={{ 'aria-label': 'search' }}/>
            
            </Paper>
            <Box sx={{m: 2, float:'right'}}><HomeIcon /></Box>
        </div>
)}
export default navbar;