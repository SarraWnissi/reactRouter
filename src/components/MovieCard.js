import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt="" />
      <div className="card-content">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>{movie.duration}</p>
        <p>{movie.releaseDate}</p>
        <ReactStars
          value={movie.rate}
          count={10}
          size={24}
          edit={false}
          activeColor="#ffd700"
        />

        <Link to={`/movie/${movie.id}`} className="btn-prim">
          Click to watch
        </Link>
      </div>
    </div>
  );
}
