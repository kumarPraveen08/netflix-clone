import { fetchGenreSeries } from "api/Api";
import "./genre.scss";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SeriesGenre() {
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getGenreSeries(id);
  }, [id]);

  const getGenreSeries = async (id) => {
    const data = await fetchGenreSeries(id);
    setSeries(data);
    setLoading(false);
  };
  return (
    <div className="genre">
      <h2>TV Series</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        consequuntur, error cupiditate nostrum illo aliquam dolorem ratione
        minus perferendis praesentium eveniet optio repudiandae, quasi, unde
        modi quibusdam. Eveniet, vero explicabo?
      </p>
      <div className="collection">
        {loading ? (
          <div>Loading...</div>
        ) : (
          series?.results?.map((item) => (
            <Link to={`/tv/${item.id}`}>
              <Card data={item} key={item?.id} isTitle={false} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
