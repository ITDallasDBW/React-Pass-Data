import React from "react";
import LoadFeature from "./LoadFeature";

const ShowFeature = ({ currentLoading, feature }) => {
  //   console.log(feature);
  return (
    <>
      <h3>This is ShowFeature</h3>
      {currentLoading ? (
        <LoadFeature />
      ) : (
        <div className="movie">
          <p>{feature.Title}</p>
      <img src={feature.Poster} alt="" className="poster" />
      </div>
      )}
    </>
  );
};

export default ShowFeature;
