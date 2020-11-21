import React from "react";
import Slick from "react-slick";

import mockData from "../data/mock";

const Poster = (
  { cover, title }: { cover: string; title: string },
  index: number
) => (
  <article key={index}>
    <img src={cover} alt={title} />
  </article>
);

const Carousel = ({ title = "Filmes em destaque", data = mockData }) => {
  const options = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section>
      <h2>{title}</h2>
      <Slick {...options}>
        {data.map((movie, index) => Poster(movie, index))}
      </Slick>
    </section>
  );
};

export default Carousel;
