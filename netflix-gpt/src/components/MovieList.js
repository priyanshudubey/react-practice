import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies && movies.length > 0 ? (
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
              />
            ))}
          </div>
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
