import React from 'react';
import { useGlobalContext } from './context/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimeItems from './components/AnimeItems';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import './App.css';

import './App.css';

function App() 
{
  const global = useGlobalContext();
  console.log("Global", global);

  return (
    <div>
      <h1> Most Welcome In CRA World </h1>
      <header> Anime Project With Create React App </header>
      <BrowserRouter>
        <Routes>
          {/* <Route path = '/' element = { <Popular /> } /> */}
          <Route path = '/' element = { <HomePage /> } />
          <Route path = '/anime/:id' element = { <AnimeItems /> } />
          <Route path = '/character/:id' element = { <Gallery /> } />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;