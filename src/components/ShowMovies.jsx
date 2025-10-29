import axios from "axios";
import React, { useState } from "react";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const ShowMovies = ({ dataToShow = [] }) => {
  console.log("ShowMovies received", dataToShow);

  const [feature, setFeature] = useState({});

  async function getFeature(imdbID) {
    const  response  = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}`
    );
    setFeature(response.data);
    console.log("GetFeature received", response.data);//
  }

  return (
    <>
      <div className="movie">
        {dataToShow.map((movie) => (
          <div key={movie.imdbID} onClick={() => getFeature(movie.imdbID)}>
            <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowMovies;
