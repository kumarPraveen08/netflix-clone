import {
  fallbackSeriesBanner,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  fetchUpcomingMovies,
  imageOriginal,
} from "api/Api";
import "./movie.scss";
import Card from "components/card/Card";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const [similar, setSimilar] = useState();
  const [upcoming, setUpcoming] = useState();
  const [movies, setMovies] = useState();
  const [credits, setCredits] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMoviesDetails(id);
    getMoviesCredits(id);
    getUpcomingMovies();
    getSimilarMovies(id);
    setLoading(false);
  }, [id]);

  const getMoviesDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    setMovies(data);
  };

  const getMoviesCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    setCredits(data);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setUpcoming(data);
  };

  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    setSimilar(data);
  };

  return (
    <div className="movie">
      <div className="banner">
        <div className="bannerImg">
          <img
            src={imageOriginal(movies?.backdrop_path) || fallbackSeriesBanner}
            alt=""
          />
        </div>

        <div className="movieDetails">
          <div className="title">{movies?.title}</div>
          <div className="movieMeta">
            {movies?.release_date?.split("-")[0]} | U/A 7+ |{" "}
            {movies?.runtime + " mins " || "unknown"} {"| "}
            {movies?.genres?.slice(0, 3).map((genre, index) => (
              <Link to={`/movie/genre/${genre.id}`}>{`${genre.name}${
                index !== movies.genres.length - 1 && ", "
              }`}</Link>
            ))}
          </div>
          <p className="movieDesc">{movies?.overview}</p>
          <div className="movieStar">
            {credits?.cast?.slice(0, 5).map((item, index) => (
              <div className="person" key={item?.id}>
                {`${item?.name}${index !== 4 ? "," : ""}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="action">call to action signup</div>
      <div className="videos">
        <h2>Trailer & Videos</h2>
        <div className="videoCollection">
          {movies?.videos?.results?.slice(0, 3)?.map((video, index) => (
            <div className="video" key={index}>
              <iframe
                title={video.title}
                width="420"
                height="315"
                src={`https://www.youtube-nocookie.com/embed/${video?.key}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <div className="cast">
        <h2>more details</h2>
        <span>cast</span>
        <div className="collection">
          {loading ? (
            <div>Loading...</div>
          ) : (
            credits?.cast?.slice(0, 16).map((item) => (
              <div className="castName" key={item?.id}>
                {item?.name}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="related">
        <h2>more like this</h2>
        <div className="collection">
          {loading ? (
            <div>Loading...</div>
          ) : (
            similar?.results?.map((item) => (
              <Link to={`/movie/${item.id}`}>
                <Card data={item} key={item?.id} isTitle={false} />
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="upcoming">
        <h2>coming soon</h2>
        <div className="collection">
          {loading ? (
            <div>Loading...</div>
          ) : (
            upcoming?.results?.slice(0, 8).map((item, index) => (
              <div className="upcomingMovie" key={index}>
                <div className="title">
                  <Link to={`/movie/${item.id}`}>{item?.title}</Link>
                </div>

                <p>
                  {item?.overview.length > 150
                    ? item.overview.slice(0, 150) + "..."
                    : item.overview}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
