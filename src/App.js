import React from 'react';
import './App.css';
import Popular from './components/Popular';
import { BrowserRouter } from 'react-router-dom';
import { useGlobalContext } from './context/GlobalContext';

function App() 
{

  const global = useGlobalContext();
  console.log(global);

  return (
    <div>
      <h1> Most Welcome </h1>
      <header> Anime Project With Create React App </header>
      <BrowserRouter>
        <div className = "popular"> 
          <Popular /> 
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;