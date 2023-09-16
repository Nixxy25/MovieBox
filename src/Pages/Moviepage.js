import React from 'react'
import "./Moviepage.css"

function getTime(){
  const date = new Date();
  const utcTime = date.getUTCDate()

}
function Moviepage(props) {
 return(
    <div>
        <div className='movie-head'>
            <img src='./Images/tv.png'></img>
            <p>MovieBox</p>
        </div>

        <img className='movie-img' src={`https://image.tmdb.org/t/p/original${props.items .backdrop_path}`}></img>

        <p data-testid="movie-title" className='title'>{props.items.original_title}</p>
        <p data-testid="movie-release-date" id='movie-release-date'>{getTime}</p>
        <p data-testid="movie-runtime"></p>
        <p data-testid="movie-overview" className='overview'>{props.items.overview}</p>
    </div>
  )
}

export default Moviepage