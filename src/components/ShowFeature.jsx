import React from "react";

const ShowFeature = ({ feature }) => {
//   console.log(feature);
  return (
  <>
    <h3>This is ShowFeature</h3>
    <p>{feature.Title}</p>
    <img src={feature.Poster} alt="" className="poster" />
  </>
  )
};

export default ShowFeature;
