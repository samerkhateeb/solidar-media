import React, { useEffect } from "react";
import {
  fetchSingleMovie,
  getLoading,
  getSingleMovie,
  removeMovie,
} from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(getSingleMovie);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [dispatch, id]);

  return loading ? (
    <div>loading ....</div>
  ) : (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMBD Rating <i className="fa fa-star"></i>: {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumnbs-up"></i>: {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i>: {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>: {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
}
