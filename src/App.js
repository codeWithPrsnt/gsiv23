import './App.css';
import Navbar from './navbar';
import ListPage from './listPage';
import Details from './Details';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import { toggleSpinner } from './redux';



function App() {
  
  const movieId = useSelector((state)=>state.movieId);
  const spinner = useSelector((state)=>state.spinner);


  return (
    <div className="App">
      <Navbar/>
      {spinner && <Spinner/>}
      {movieId>0?<Details/>:<ListPage/>}
    </div>
  );
}

export default App;
