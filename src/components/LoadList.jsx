import React from "react";

const LoadList
 = () => {

  //put in if else for showing LoadList
  //  movie list or LoadList
  //  feature
  // if LoadList
  // Movie show this, else if LoadList
  // Feature show this
  return (
    <>
    
      {new Array(6).fill(0).map((_, index) => (
        <div className="loading key" key={index}>
          <img alt="" className="loading poster" />
          <h3 className="loading title"></h3>
          <p className="loading year"></p>
        </div>
      ))}{" "}
    </>
  );
};

export default LoadList
;
