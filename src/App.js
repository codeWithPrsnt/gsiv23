import './App.css';
import Navbar from './navbar';
import ListPage from './listPage';
import Details from './Details';
import * as React from 'react';
import { useSelector } from 'react-redux';




function App() {
  
  const movieId = useSelector((state)=>state.movieId);

  return (
    <div className="App">
      <Navbar/>
      {movieId>0?<Details/>:<ListPage/>}
    </div>
  );
}

export default App;
