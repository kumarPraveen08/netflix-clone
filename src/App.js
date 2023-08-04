import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Series from "pages/tv/Series";
import Home from "pages/home/Home";
import Movie from "pages/browse/Movie";
import Movies from "pages/movies/Movies";
import SingleSeries from "pages/browse/Series";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MovieGenre from "pages/browse/MovieGenre";
import SeriesGenre from "pages/browse/seriesGenre";
import NotFound from "pages/notfound/NotFound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/series",
          element: <Series />,
        },
        {
          path: "/movie/:id",
          element: <Movie />,
        },
        {
          path: "/tv/:id",
          element: <SingleSeries />,
        },
        {
          path: "/movie/genre/:id",
          element: <MovieGenre />,
        },
        {
          path: "/tv/genre/:id",
          element: <SeriesGenre />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
