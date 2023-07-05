import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails({ movies }) {
  const params = useParams();

  console.log(params);

  const findedMovie = movies.find((el) => el.id == params.id);
  console.log(findedMovie);
  return (
    <div className="movie-detail" style={{ color: "white" }}>
      <img src={findedMovie.image} alt="" />
      <div className="card-content">
        <h1>{findedMovie.title}</h1>
        <p>{findedMovie.description}</p>
        <p>{findedMovie.duration}</p>
        <p>{findedMovie.releaseDate}</p>
      </div>
    </div>
  );
}
