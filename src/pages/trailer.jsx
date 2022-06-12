import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import styled from 'styled-components';
import YouTube from 'react-youtube';


function Trailer() {

    const API_URL = 'https://api.themoviedb.org/3';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

    const [trailer, setTrailer] = useState([]);

    const fetchTrailer = async () => {
        const {data: {results}} = await axios.get(`${API_URL}/discover/movie`,{
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
            }
        })
        setTrailer(results)
    }

    useEffect(() => {
        fetchTrailer();
    }, [])

  return (
    <div>
        <Splide>
        {trailer.map((item) => {
            return(
                <SplideSlide>
                    <SlideTrailer >
                        <img src={`${IMAGE_PATH}${item.backdrop_path}`} alt="" />                                                

                        <button >Play trailer</button>
                        
                        <div className='trailer-content'>
                            <h2>{item.title}</h2>
                            <p>{item.overview}</p>
                        </div>
                    </SlideTrailer>
                </SplideSlide>
            )
        })}
        </Splide>
    </div>
  )
}

const SlideTrailer = styled.div`    
    
    width: 100%;
    height: 60vh;
    .play-trailer{
        position: absolute;
        top: 0;
        width: 50%;
        height: 50%;
    }
    button{
        position: absolute;
        padding: 8px 16px;
        top: 50px;
        left: 15%;
        background-color: #fb923c;
        color: white;
        font-weight: 600;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        &:hover{            
            background-color: white;
            color: #fb923c;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
        background-size: cover;        
    }
    .trailer-content{
        position: absolute;
        bottom: 50px;
        left: 15%;
        right: 30%;
        color: white;
    }
`

export default Trailer