import React from "react";
// import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="  bg-black">
      <div className="-mt-72 relative z-20 pl-6">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
