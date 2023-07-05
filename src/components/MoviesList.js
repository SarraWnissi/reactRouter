import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesList({ movies, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="list">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
