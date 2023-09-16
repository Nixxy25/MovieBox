import React from 'react'

function Card(props) {
  return (
    <div className='movie-list'>
        <div data-testid="movie-card" className='card'>
            <img data-testid="movie-poster" className='card-img' src={`https://image.tmdb.org/t/p/w500${props.items.poster_path}`}></img>
            <div data-testid="movie-release-date" className='card-date'>{props.items.release_date}</div>
            <div data-testid="movie-title" className='card-name'>{props.items.original_title}</div>
            <div className='card-vote'>
                <img src='./Images/imdb.png'></img>
                <p>{props.items.vote_average}/10</p>
            </div>
        </div>
    </div>
    
  )
}

export default Card