import './App.css';
import Navbar from './navbar';
//import ListPage from './listPage';
//import Details from './Details';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
//import { toggleSpinner } from './redux';
import { Suspense, lazy } from "react";
const ListPage = lazy(() => import('./listPage'))
const Details = lazy(() => import('./Details'))



function App() {
  
  const movieId = useSelector((state)=>state.movieId);
  const spinner = useSelector((state)=>state.spinner);


  return (
    <div className="App">
      <Navbar/>
      {spinner && <Spinner/>}
      {movieId>0?<Suspense fallback=
{<div>Details Page is loading please wait...</div>}>
                <Details />
            </Suspense>:
            <Suspense fallback=
{<div>ListPage is loading please wait...</div>}>
                <ListPage />
            </Suspense>}
    </div>
  );
}

export default App;
