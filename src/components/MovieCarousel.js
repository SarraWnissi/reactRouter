import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Nombre de films à afficher simultanément
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500, // Modifier la configuration pour les écrans plus petits
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Featured Movies</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
