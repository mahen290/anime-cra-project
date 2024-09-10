import React from 'react';
import { useState } from 'react';
import Popular from './Popular';
import { useGlobalContext } from '../context/GlobalContext';

function HomePage() 
{
    const { handleChange, handleSubmit, search, searchAnime } = useGlobalContext();
    const [ rendered, setRendered ] = useState('popular');

    const switchComponent = () => 
    {
        switch(rendered) 
        {
            case 'popular': 
                return <Popular rendered = { rendered } />
            default:
                return <Popular rendered = { rendered } />   
        }
    }

  return (
    <div>
        <main>

            <div className = 'logo'>
                <h1>
                    {   
                        rendered === 'popular' ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'
                    }
                </h1>
            </div>

            <div className = 'search-container'>

                <div className = 'filter-btn popular-filter'>
                    <button onClick = {() => {
                        setRendered('popular')
                        }}>
                        Popular Anime 
                    </button>
                </div>  

                <form action = '' className = 'search-form'>
                    <div className = 'input-control'>
                    <input type = 'text' placeholder = 'Search Anime' value = { search } onChange = { handleChange } />
                        <button type = 'submit' onClick = { handleSubmit }> Search </button>
                    </div>
                </form>

                <div className = 'filter-btn airing-filter'>
                    <button onClick = {() => {
                        setRendered('airing')
                        }}>
                        Airing Anime
                    </button>
                </div>
                
                <div className = 'filter-btn upcoming-filter'>
                    <button onClick = {() => {
                        setRendered('upcoming')
                        }}>
                        Upcoming Anime 
                    </button>
                </div>

            </div>
        </main>
    </div>
  );
}

export default HomePage;