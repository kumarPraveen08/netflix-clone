import { fallbackSeriesBanner, image500 } from "api/Api";
import Slider from "react-slick";

export default function SliderCard({ data, isTitle }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <img
            src={image500(data?.backdrop_path) || fallbackSeriesBanner}
            alt=""
          />
          {isTitle && <span>{data?.name}</span>}
        </div>
      </Slider>
    </div>
  );
}
