import Card from "components/card/Card";
import "./movies.scss";
import { fetchTrendingMovies, fetchUpcomingMovies, movieGenre } from "api/Api";
import Category from "components/category/Category";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [trending, setTrending] = useState();
  const [upcoming, setUpcoming] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUpcomingMovies();
    getTrendingMovies();
    setLoading(false);
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    setUpcoming(data);
  };

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setTrending(data);
  };

  return (
    <div className="movies">
      <h2>Movies</h2>
      <p>
        Movies move us like nothing else can, whether they’re scary, funny,
        dramatic, romantic or anywhere in-between. So many titles, so much to
        experience.
      </p>
      <div className="movieCollection">
        <div className="category">
          <div className="cate">Trending Movies</div>
          <div className="collection">
            {loading ? (
              <div>Loading...</div>
            ) : (
              trending?.results?.map((item) => (
                <Link to={`/movie/${item.id}`}>
                  <Card data={item} key={item?.id} isTitle={false} />
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="category">
          <div className="cate">Upcoming Movies</div>
          <div className="collection">
            {loading ? (
              <div>Loading...</div>
            ) : (
              upcoming?.results?.map((item) => (
                <Link to={`/movie/${item.id}`}>
                  <Card data={item} key={item?.id} isTitle={false} />
                </Link>
              ))
            )}
          </div>
        </div>
        {movieGenre.map((item) => (
          <Category
            title={`${item?.name} Movies`}
            id={item?.id}
            type={"movie"}
          />
        ))}
      </div>
    </div>
  );
}
