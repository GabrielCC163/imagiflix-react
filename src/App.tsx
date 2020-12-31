import React, { useState, useEffect } from "react";

import CONST from "./data/constants";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { URL, APISTRING } = CONST;
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(
        `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
      );
      const seriesData = await series.json();
      setSeries(seriesData);
    };

    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies]);

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  return (
    <div className="bg-black text-white m-auto antialised font-sans">
      <Hero {...getFeaturedMovie()} />
      <NavBar />
      <Carousel title="Filmes Populares no Momento" data={getMovieList()} />
      <Carousel title="Séries Populares" data={series?.results} />
      <Carousel title="Placeholder" />
    </div>
  );
};

export default App;
