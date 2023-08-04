import { fallbackSeriesBanner, image500 } from "api/Api";
import "./card.scss";

export default function Card({ data, isTitle }) {
  return (
    <div className="card">
      <img src={image500(data?.backdrop_path) || fallbackSeriesBanner} alt="" />
      {isTitle && <span>{data?.name}</span>}
    </div>
  );
}
