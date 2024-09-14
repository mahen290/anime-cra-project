import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import styled from 'styled-components';

function Sidebar() {
    const { popularAnime } = useGlobalContext();

    const sorted = popularAnime?.sort( (a,b) => {
        return b.score - a.score
    })

return (
<SidebarStyled>
    <h3> Top 5 Popular Anime </h3>
    <div className = 'top_five_popular_anime'>
    {
        sorted?.slice(0,5).map( (anime) => {
            return <Link to = { `/anime/${anime.mal_id}` } key = { anime.mal_id }>
                <img src = { anime.images.jpg.large_image_url } alt = '' /> 
                <h4> { anime.title } </h4>
            </Link>
            })
    }
    </div>
</SidebarStyled>
)
};

const SidebarStyled = styled.div`
margin-top: 4rem;
border-top: 3px solid #e5e7eb;
padding: 3rem;

h3
{
    font-size: 0.88rem;
    color: blue;
}

.top_five_popular_anime
{
    display: flex;
    flex-direction: column;
    width: 150px;

    img
    {
        width: 100%;
        border-radius: 5px;
        border: 5px solid black;
    }

    a
    {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: #27ae60;

        h4 
        {
            font-size: 1rem;
        }      
    }
}

`;

export default Sidebar;