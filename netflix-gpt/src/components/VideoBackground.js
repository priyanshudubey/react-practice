import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="max-w-full sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/Idh8n5XuYIA?si=" +
          trailerVideo?.key +
          "&autoplay=1&mute=1&rel=0"
        }
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default VideoBackground;
