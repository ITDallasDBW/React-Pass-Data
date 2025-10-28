import React from "react";
import Main from "./Main";

const ShowData = (dataToShow) => {
  console.log(dataToShow);
  return;
  <>
    <div className="movie">
      {dataToShow.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
      {/* {dataToShow.map((movie) => (
                // key={movie.imdbID}>
                <div className="movie__title">movie.Title}
                </div>
            )) */}
    </div>
  </>;
};

export default ShowData;
