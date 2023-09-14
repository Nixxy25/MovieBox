import React from 'react'

function Carouselpage(props) {
  return (
    <div>
        <img className='poster-img' src={`https://image.tmdb.org/t/p/original${props.items.backdrop_path }`}></img>

        <div className='carousel-page'>
          <h1 className='title'>{props.items.original_title}</h1>
          <p className='vote'>{props.items.vote_average}/10</p>
          <p className='overview'>{props.items.overview}</p>
          <button className='carousel-btn'>Watch Trailer</button>
        </div>
        
    </div>
  )
}

export default Carouselpage