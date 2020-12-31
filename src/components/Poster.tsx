import React from "react";

import CONST from "../data/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

import { Movie } from "../data/mock";

import "./Poster.css";

const Poster = (
  { cover, poster_path, title, name, vote_average }: Movie,
  index: number
) => {
  const { IMAGEURL } = CONST;
  return (
    <article
      className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
      key={index}
    >
      <img
        src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover}
        alt={title}
      />
      <div className="poster cursor-pointer absolute inset-0 w-full h-full py-8 px-4 grid place-items-center text-center leading-6 bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
        <FontAwesomeIcon icon={faPlayCircle} size="5x" />
        <h2 className="text-2xl">{title ? title : name}</h2>
        <Score value={vote_average} />
      </div>
    </article>
  );
};

export default Poster;
