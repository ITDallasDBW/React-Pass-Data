import axios from "axios";
import React, { useState } from "react";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const ShowMovies = ({ loading, dataToShow = [] }) => {
  console.log(
    "ShowMovies render - loading:",
    loading,
    "dataLength:",
    dataToShow.length
  );

  const [feature, setFeature] = useState({});

  async function getFeature(imdbID) {
    const response = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}`
    );
    setFeature(response.data);
    console.log("GetFeature received", response.data); //
  }

  return (

    <>
    {loading 
    ? 
    new Array(6).fill(0).map((_, index) => (
      <div className="loading key" key={index}>
        <img src="" alt="" className="loading poster" />
        <h3 className="loading title"></h3>
        <p className="loading year"></p>
      </div>
    ))
    :

      <div className="movie">
        {dataToShow.map((movie) => (
          <div key={movie.imdbID} onClick={() => getFeature(movie.imdbID)}>
            <img src={movie.Poster} alt="" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
        }
    </>
  );
};

export default ShowMovies;
