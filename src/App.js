import React from 'react';
import './App.css';
import Popular from './components/Popular';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimeItems from './components/AnimeItems';
import { useGlobalContext } from './context/GlobalContext';

function App() 
{

  const global = useGlobalContext();
  console.log("Global", global);

  return (
    <div>
      <h1> Most Welcome </h1>
      <header> Anime Project With Create React App </header>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <Popular/> } />
          <Route path = '/anime/:id' element = { <AnimeItems/> } />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;