import React from 'react';
import { useState } from 'react';
import Popular from './Popular';
import Airing from './Airing';
import UpComing from './UpComing';
import { useGlobalContext } from '../context/GlobalContext';
import styled from 'styled-components';

function HomePage() 
{
    const { handleChange, handleSubmit, search, getPopularAnime, getAiringAnime, getUpcomingAnime } = useGlobalContext();

    const [ rendered, setRendered ] = useState('popular');

    const switchComponent = () => {
        switch(rendered) 
        {
            case 'popular': 
                return <Popular rendered = { rendered } />

            case 'airing':
                return <Airing rendered = { rendered } />

            case 'upcoming':
                return <UpComing rendered = { rendered } />

            default:
                return <Popular rendered = { rendered } />   
        }
    }

return (
<HomePageStyle>
<main>

    <div className = "logo">
        <h1 className = "Anime-Heading">
            {   
                rendered === 'popular' ? 'Popular Anime' : 
                rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'
            }
        </h1>
    </div>

    <div className = 'search-container'>

        {/* Button For Popular Anime */}

        <div className = 'filter-btn popular-filter'>
            <button onClick = { () => {
                setRendered('popular');
                getPopularAnime();
                }}>
                Popular Anime <i className = "fa-solid fa-fire"> </i>
            </button>
        </div>  

        {/* Button For Airing Anime  */}

        <div className = 'filter-btn airing-filter'>
            <button onClick = { () => {
                setRendered('airing');
                getAiringAnime();
                }}>
                Airing Anime
            </button>
        </div>

        {/* Button For Upcoming Anime */}

        <div className = 'filter-btn upcoming-filter'>
            <button onClick = { () => {
                setRendered('upcoming');
                getUpcomingAnime();
                }}>
                Upcoming Anime 
            </button>
        </div>

        {/* Form & Input For User Searching By Anime Items  */}

        <form action = '' className = 'search-form' 
            onSubmit = { handleSubmit }>
            <div className = 'input-control'>
                <input type = 'text' placeholder = 'Search Anime' 
                    value = { search } onChange = { handleChange } />
                <button type = 'submit'> Search </button>
            </div>
            <div className = 'search-results'> </div>
        </form>

    </div>
</main>
    { switchComponent() }
</HomePageStyle>
  );
}

const HomePageStyle = styled.div`
background-color: #eededd;

main 
{
    padding: 1.5rem;
    width: 100%;
    margin: 0 auto;
    transition: all 0.85s ease-in-out;

    // For Responsiveness WebPage 

        @media screen and (max-width:1530px)
        {
            width: 94%;
        }

    .logo 
    {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
    }
        
    .Anime-Heading
    {
        width: 40%;
        height: 5.6rem;
        padding: 1.35rem;
        background: skyblue;
        border-radius: 33px;
        font-size: 38px;
        color: blue;
        text-shadow: 1px 1px 1px black;
    }

    .search-container 
    {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
           
        button 
        {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            outline: none;
            background-color: magenta;
            border: 3px solid white;
            border-radius: 15px;
            font-family: inherit;
            font-size: 1.17rem;
            font-weight: bolder;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
        }
            button:hover
            {
                background-color: yellow;
                color: magenta;
                border: 3px solid black;
            }

        form 
        {

                @media screen and (min-width:560px)
                {
                    width: 50%;
                }
            position: relative;
            width: 50%;
            
            
            .input-control
            {
                position: relative;
                transition: all 1s ease-in-out;
            }

            .input-control input
            {
                width: 86%;
                height: 5rem;
                padding: 0.5rem;
                border: 1px solid red;
                outline: none;
                border-radius: 15px;
                font-size: 1.25rem;
                background-color: #fff;
                transition: all .5s ease-in-out;

                
            }
               
                

            .input-control button 
            {
                position: absolute;
                height: 4.5rem;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}
    
`;

export default HomePage;