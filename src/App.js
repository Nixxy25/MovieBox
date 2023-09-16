import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carouselpage from './Component/Carouselpage';
import Card from "./Component/Card"
import Footer from './Component/Footer';
import Headerpage from './Component/Headerpage';



function App() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=467f875d76ce5f71c9257058f2d8e992")
      .then(response => response.json())
      
      .then(data => {
        setMovie(data.results);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carousel = movie.map(items => {
    return(
    <Carouselpage
    items={items}
    />
    )
  })

  const card = movie.map(items =>{
    return(
      <Card
      items={items}
      />
    )
  })

  
  return (
    <div>
      <Headerpage/>
      <Carousel responsive={responsive}>
        {carousel}
      </Carousel>
      {card}
      <Footer/>
    </div>
  )
}

export default App