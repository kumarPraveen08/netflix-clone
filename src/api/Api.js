import axios from "axios";
import { api_key } from "constants";

// endpoints
const apiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${api_key}`;
const trendingSeriesEndpoint = `${apiBaseUrl}/trending/tv/day?api_key=${api_key}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${api_key}`;
const upcomingSeriesEndpoint = `${apiBaseUrl}/tv/on_the_air?api_key=${api_key}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${api_key}`;
const topRatedSeriesEndpoint = `${apiBaseUrl}/tv/top_rated?api_key=${api_key}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${api_key}`;
const searchSeriesEndpoint = `${apiBaseUrl}/search/tv?api_key=${api_key}`;

// dynamic endpoints
const movieVideosEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/videos?api_key=${api_key}`;
const movieDetailsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}?append_to_response=videos&api_key=${api_key}`;
const movieCreditsEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${api_key}`;
const genreMoviesEndpoint = (genre_id) =>
  `${apiBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${genre_id}`;
const similarMoviesEndpoint = (id) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${api_key}`;
const seriesDetailsEndpoint = (id) =>
  `${apiBaseUrl}/tv/${id}?append_to_response=videos&api_key=${api_key}`;
const seriesSeasonDetailsEndpoint = (id, season) =>
  `${apiBaseUrl}/tv/${id}/season/${season}?api_key=${api_key}`;
const seriesCreditsEndpoint = (id) =>
  `${apiBaseUrl}/tv/${id}/credits?api_key=${api_key}`;
const similarSeriesEndpoint = (id) =>
  `${apiBaseUrl}/tv/${id}/similar?api_key=${api_key}`;
const genreSeriesEndpoint = (genre_id) =>
  `${apiBaseUrl}/discover/tv?api_key=${api_key}&with_genres=${genre_id}`;

// backdrop images - sizes: 500, 780, original
export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image780 = (path) =>
  path ? `https://image.tmdb.org/t/p/w780/${path}` : null;
export const imageOriginal = (path) =>
  path ? `https://image.tmdb.org/t/p/original/${path}` : null;

// fallback images
export const fallbackPersonImageM =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
export const fallbackPersonImageF =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg";
export const fallbackMoviePoster = "https://i.ibb.co/gV8Lz2s/no-poster.png";
export const fallbackSeriesBanner =
  "https://i.ibb.co/L55x5Bh/Untitled-design.jpg";

// api call method
const apiCall = async (endpoints, params) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: " + error);
    return {};
  }
};

// movies api calls
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};
export const fetchMovieVideos = (id) => {
  return apiCall(movieVideosEndpoint(id));
};
export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};
export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditsEndpoint(id));
};
export const fetchSimilarMovies = (id) => {
  return apiCall(similarMoviesEndpoint(id));
};
export const fetchGenreMovies = (id) => {
  return apiCall(genreMoviesEndpoint(id));
};
export const fetchMovies = (params) => {
  return apiCall(searchMoviesEndpoint, params);
};

// tv series api calls
export const fetchTrendingSeries = () => {
  return apiCall(trendingSeriesEndpoint);
};
export const fetchUpcomingSeries = () => {
  return apiCall(upcomingSeriesEndpoint);
};
export const fetchTopRatedSeries = () => {
  return apiCall(topRatedSeriesEndpoint);
};
export const fetchSeriesDetails = (id) => {
  return apiCall(seriesDetailsEndpoint(id));
};
export const fetchSeriesSeasonDetails = (id, season) => {
  return apiCall(seriesSeasonDetailsEndpoint(id, season));
};
export const fetchSeriesCredits = (id) => {
  return apiCall(seriesCreditsEndpoint(id));
};
export const fetchSimilarSeries = (id) => {
  return apiCall(similarSeriesEndpoint(id));
};
export const fetchGenreSeries = (id) => {
  return apiCall(genreSeriesEndpoint(id));
};
export const fetchSeries = (params) => {
  return apiCall(searchSeriesEndpoint, params);
};
