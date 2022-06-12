import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Content() {
    const API_URL = 'https://api.themoviedb.org/3';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200';
    const tag = <div className='movie-placeholder'>No image found</div>

    const [movies, setMovie] = useState([]);
    const [selectdMovie, setSelectedMovie] = useState([]);

    const fetchMovie = async () => {
        const {data: {results}} = await axios.get(`${API_URL}/discover/movie`,{
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY
            }
        })
        setMovie(results)
        setSelectedMovie(results[2])
        console.log(results);
    }

    useEffect(() => {
        fetchMovie();
    }, [])


  return (      
    <div className="App">        
    <h3 style={{margin: '30px 0 25px 25px', color: 'white'}}>Find your favorite movie to watch</h3>
        <Wrapper>            
            {movies.map(movie => {
                return (                    
                    <MovieCard>
                        {movie.poster_path ? <MovieImage className='movie-cover' src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/> : tag }
                        <h5 className='movie-title'>{movie.title}</h5>
                    </MovieCard>
                )
            })}   
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 10px auto;
    padding: 0 10px;
    /* max-width: 1024px; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
`
const MovieCard = styled.div`    
    position: relative;;
    height: 320px;
    &:hover{
        transform: scale(1.03);
        transition: transform 100ms ease-in-out;
    }
    
    h5{
        position: absolute;
        bottom: 15px;
        left: 10px;
        color: white;
    }
`
const MovieImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`

export default Content