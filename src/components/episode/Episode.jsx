import { useEffect, useState } from "react";
import "./episode.scss";
import {
  fallbackSeriesBanner,
  fetchSeriesSeasonDetails,
  image500,
} from "api/Api";

export default function Episode({ id, season }) {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    getSeasonEpisodes(id, season);
  }, [id, season]);

  const getSeasonEpisodes = async (id, season) => {
    const data = await fetchSeriesSeasonDetails(id, season);
    setEpisodes(data);
  };
  return (
    <div className="collection">
      {episodes?.episodes?.map((e) => (
        <div className="episode" key={e.id}>
          <img src={image500(e?.still_path) || fallbackSeriesBanner} alt="" />
          <div className="meta">
            <div className="title">{e?.name}</div>
            <div className="runtime">
              {e?.runtime ? e?.runtime + "m" : "unknown" || "unknow"}
            </div>
          </div>
          <p>
            {e?.overview.length > 120 ? e?.overview.slice(0, 120) : e?.overview}
          </p>
        </div>
      ))}
    </div>
  );
}
