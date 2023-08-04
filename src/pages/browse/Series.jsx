"use client";
import {
  fallbackSeriesBanner,
  fetchSeriesCredits,
  fetchSeriesDetails,
  fetchSimilarSeries,
  fetchUpcomingSeries,
  imageOriginal,
} from "api/Api";
import "./series.scss";
import Card from "components/card/Card";
import Episode from "components/episode/Episode";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleSeries() {
  const { id } = useParams();
  const [similar, setSimilar] = useState();
  const [upcoming, setUpcoming] = useState();
  const [series, setSeries] = useState();
  const [credits, setCredits] = useState();
  const [loading, setLoading] = useState(false);
  const [season, setSeason] = useState(1);

  useEffect(() => {
    setLoading(true);
    getSeriesDetails(id);
    getSeriesCredits(id);
    getUpcomingSeries();
    getSimilarSeries(id);
    setLoading(false);
  }, [id]);

  const getSeriesDetails = async (id) => {
    const data = await fetchSeriesDetails(id);
    setSeries(data);
  };

  const getSeriesCredits = async (id) => {
    const data = await fetchSeriesCredits(id);
    setCredits(data);
  };

  const getUpcomingSeries = async () => {
    const data = await fetchUpcomingSeries();
    setUpcoming(data);
  };

  const getSimilarSeries = async (id) => {
    const data = await fetchSimilarSeries(id);
    setSimilar(data);
  };

  return (
    <div className="series">
      <div className="banner">
        <div className="bannerImg">
          <img
            src={imageOriginal(series?.backdrop_path) || fallbackSeriesBanner}
            alt=""
          />
        </div>
        <div className="seriesDetails">
          <div className="title">{series?.name}</div>
          <div className="seriesMeta">
            {series?.first_air_date.split("-")[0]} | U/A 7+ |{" "}
            {series?.number_of_seasons || 1} Seasons {"| "}
            {series?.genres?.slice(0, 3).map((genre, index) => (
              <Link to={`/tv/genre/${genre.id}`}>{`${genre.name}${
                index !== 2 && ", "
              }`}</Link>
            ))}
          </div>
          <p className="seriesDesc">{series?.overview}</p>
          <div className="seriesStar">
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
          {series?.videos?.results?.slice(0, 3)?.map((video, index) => (
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
      <div className="episodes">
        <h2>episodes | {series?.name}</h2>
        <select
          name="season"
          className="season"
          onChange={(e) => setSeason(e.target.value)}
        >
          {series?.seasons?.map((item, index) => (
            <option value={index + 1} key={index}>
              {item?.name}
            </option>
          ))}
        </select>
        <Episode id={id} season={season} />
      </div>
      <div className="cast">
        <h2>more details</h2>
        <span>cast</span>
        <div className="collection">
          {loading ? (
            <div>Loading...</div>
          ) : (
            credits?.cast?.map((item) => (
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
              <Link to={`/tv/${item.id}`}>
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
                  <Link to={`/tv/${item.id}`}>{item?.name}</Link>
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
