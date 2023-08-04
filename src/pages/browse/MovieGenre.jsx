import { fetchGenreMovies } from "api/Api";
import "./genre.scss";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieGenre() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

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
    <div className="genre">
      <h2>Movies</h2>
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
