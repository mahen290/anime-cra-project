import { createContext, useContext, useEffect, useReducer, useState } from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

// Now Action Begins

    const LOADING = "LOADING";
    const SEARCH = "SEARCH";
    const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
    const GET_AIRING_ANIME = "GET_AIRING_ANIME";
    const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
    
// Reducer Starts From Here 

    const reducer = (state, action) => 
    {
        switch(action.type) 
        {
            case LOADING: 
                return { ...state, loading: true }

            case GET_POPULAR_ANIME: 
                return { ...state, popularAnime: action.payload, loading: false };

            case SEARCH: 
                return { ...state, searchResults: action.payload, loading: false }; 

            case GET_AIRING_ANIME:
                    return { ...state, airingAnime: action.payload, loading: false };   

            case GET_UPCOMING_ANIME:
                return { ...state, upcomingAnime: action.payload, loading: false };

            default: 
                return state;    
        }
    };

// Initial State Defines Here Inside GlobalContextProvider Function

export const GlobalContextProvider = ({ children }) => 
{
    const initialState = 
    {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false 
    }

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ search, setSearch ] = useState('');

    // Deal With handleChange 

    const handleChange = (event) => {
        setSearch(event.target.value);
        if(event.target.value === '') 
        {
            state.isSearch = false;
        }
    }

    // Deal With handleSubmit

    const handleSubmit = (event) => {
        event.preventDefault();
        if(search) 
        {
            searchAnime(search);
            state.isSearch = true;
            state.loading = true;
        } 
        else 
        {
            state.isSearch = false;
            alert('Please Enter Your Favorite Anime To Search');
        }
    }

    // Fetch Popular Anime

    const getPopularAnime = async () => 
    {
        dispatch({ type: LOADING });
            const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
            const data = await response.json();
            console.log(data.data);
        dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    } 

    // Ssearch Anime

    const searchAnime = async (anime) => 
    {
        dispatch({ type: LOADING });
        const response = await fetch(`${baseUrl}/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json(); 
        dispatch({ type: SEARCH, payload: data.data });
    }

    // Fetch Airing Anime 

    const getAiringAnime = async () => 
    {
        dispatch({ type: LOADING });
        const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
        const data = await response.json();
        dispatch({ type: GET_AIRING_ANIME, payload: data.data });
    }

    // Fetch Upcoming Anime 

    const getUpcomingAnime = async () => 
    {
        dispatch({ type: LOADING });
        const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
        const data = await response.json();
        dispatch({ type: GET_UPCOMING_ANIME, payload: data.data });
    }

    useEffect(() => {
        getPopularAnime();
    }, [])

    return (
        <GlobalContext.Provider value = {{ 
            ...state, 
            handleChange, 
            handleSubmit, 
            searchAnime, 
            search,
            getPopularAnime,
            getAiringAnime,
            getUpcomingAnime
        }}>
            { children }
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () =>
{
    return useContext(GlobalContext);
}