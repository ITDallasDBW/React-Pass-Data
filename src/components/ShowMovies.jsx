import axios from "axios";
import React, { useState } from "react";
import LoadList from "./LoadList";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const ShowMovies = ({ currentLoading, updateLoading, dataToShow = [], setFeature }) => {

  async function getFeature(imdbID) {
    updateLoading(true);
    const { data } = await axios.get(
      `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}`
    );
    const featureResponse = data;
    setFeature(featureResponse);
    // console.log("ShowMovies setFeature", data.Title);
    updateLoading(false);
  }

  return (
    <>
    <h3>This is ShowMovies</h3>
      {currentLoading ? (
        
        <LoadList />
      ) : (
        <div className="movie">
          {dataToShow.map((movie) => (
            <div key={movie.imdbID} onClick={() => getFeature(movie.imdbID)}>
              <img src={movie.Poster} alt="" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowMovies;
