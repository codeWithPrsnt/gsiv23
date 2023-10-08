import './App.css';
import Navbar from './navbar';
//import ListPage from './listPage';
//import Details from './Details';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

import {lazy,Suspense } from "react";
import {MemoryRouter as Router,Routes, Route,redirect} from 'react-router-dom';



const ListPage = lazy(() => import('./listPage'))
const Details = lazy(() => import('./Details'))

const details=()=><Suspense fallback=
                {<div>Details Page is loading please wait...</div>}>
                <Details />
              </Suspense>
const listPage=()=><Suspense fallback=
                {<div>ListPage is loading please wait...</div>}>
                <ListPage />
              </Suspense>
  


function App() {
  

  const spinner = useSelector((state)=>state.spinner);


  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route exact path={'/'} Component={listPage }/>
        <Route path={'/Details/:movieId'} Component={details}/>
        <Route path='*' render={()=><redirect to="/" />}/>
      
      </Routes>
      {spinner && <Spinner/>}
    </Router>
  );
}

export default App;
