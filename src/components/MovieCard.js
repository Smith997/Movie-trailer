import React from 'react'

/* const MovieCard = ({movie, selectedMovie}) => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200';
    const tag = <div className='movie-placeholder'>No image found</div>
  return (
    <div className='movie-card' onClick={() => {selectedMovie(movie)}}>
        {movie.poster_path ? <img className='movie-cover' src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/> : tag }
        <h5 className='movie-title'>{movie.title}</h5>
    </div>
  )
} */

const MovieCard = ({movie}) => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w200';
    const tag = <div className='movie-placeholder'>No image found</div>
  return (
    <div className='movie-card' >
        {movie.poster_path ? <img className='movie-cover' src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/> : tag }
        <h5 className='movie-title'>{movie.title}</h5>
    </div>
  )
}

export default MovieCard