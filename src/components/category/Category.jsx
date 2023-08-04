import { useEffect, useState } from "react";
import "./category.scss";
import { fetchGenreMovies } from "api/Api";
import { Link } from "react-router-dom";
import Card from "components/card/Card";

export default function Category({ title, id, type }) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(false);
  useEffect(() => {
    setLoading(true);
    getGenreMovies(id);
  }, [id]);

  const getGenreMovies = async (id) => {
    const data = await fetchGenreMovies(id);
    setMovies(data);
    setLoading(false);
  };
  return (
    <div className="category" id={id}>
      <div className="cate">
        <Link to={`/${type === "movie" ? "movie" : "tv"}/genre/${id}`}>
          {title}
        </Link>
      </div>
      <div className="collection">
        {loading ? (
          <div>Loading...</div>
        ) : (
          movies?.results?.map((item) => (
            <Link to={`/movie/${item.id}`}>
              <Card data={item} key={item?.id} isTitle={false} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
