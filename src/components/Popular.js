import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Popular({ rendered }) {
    const { popularAnime, isSearch, searchResults } = useGlobalContext();
    console.log("Popular Anime", popularAnime);

    const conditionalRender = () => {
        if (!isSearch && rendered === "popular") 
        {
            return popularAnime?.map( (anime) => {
            console.log("Anime", anime);
                return <Link to = {`/anime/${anime.mal_id}`} key = {anime.mal_id} >
                    <img src = {anime.images.jpg.large_image_url} alt = '' />
                </Link>
            })
        }
        else 
        {
            return searchResults?.map( (anime) => {
                return <Link to = { `/anime/${anime.mal_id}` } key = { anime.mal_id }>
                    <img src = { anime.images.jpg.large_image_url } alt = " " />
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className = 'popular-anime'>
                { conditionalRender() }
            </div>
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
   display: flex;

.popular-anime 
{
    margin-top: 2rem;
    padding: 1.66rem 0.75rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top: 5px solid #e5e7eb;

    a 
    {
        height: 500px;
        border-radius: 7px;
        border: 5px solid #e5e7eb;
    }

    a img 
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
}
    
`;

export default Popular;