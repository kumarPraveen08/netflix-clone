import "./series.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { seriesGenre } from "constants";
import { fetchTrendingSeries, fetchUpcomingSeries } from "api/Api";
import Card from "components/card/Card";
import Category from "components/category/Category";

export default function Movies() {
  const [trending, setTrending] = useState();
  const [upcoming, setUpcoming] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUpcomingSeries();
    getTrendingSeries();
    setLoading(false);
  }, []);

  const getUpcomingSeries = async () => {
    const data = await fetchUpcomingSeries();
    setUpcoming(data);
  };

  const getTrendingSeries = async () => {
    const data = await fetchTrendingSeries();
    setTrending(data);
  };

  return (
    <div className="series">
      <h2>Series</h2>
      <p>
        Movies move us like nothing else can, whether they’re scary, funny,
        dramatic, romantic or anywhere in-between. So many titles, so much to
        experience.
      </p>
      <div className="movieCollection">
        <div className="category">
          <div className="cate">Trending Series</div>
          <div className="collection">
            {loading ? (
              <div>Loading...</div>
            ) : (
              trending?.results?.map((item) => (
                <Link to={`/tv/${item.id}`}>
                  <Card data={item} key={item?.id} isTitle={false} />
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="category">
          <div className="cate">Upcoming Series</div>
          <div className="collection">
            {loading ? (
              <div>Loading...</div>
            ) : (
              upcoming?.results?.map((item) => (
                <Link to={`/tv/${item.id}`}>
                  <Card
                    data={item}
                    key={item?.id}
                    isTitle={false}
                    type={"series"}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
        {seriesGenre.map((item) => (
          <Category title={`${item?.name} Series`} id={item?.id} />
        ))}
      </div>
    </div>
  );
}
