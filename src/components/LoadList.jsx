import React from "react";

const LoadList
 = () => {

  return (
    <>
    
      {new Array(6).fill(0).map((_, index) => (
        <div className="loading key" key={index}>
          <img alt="" className="loading poster" />
          <h3 className="loading title"></h3>
          <p className="loading year"></p>
        </div>
      ))}
    </>
  );
};

export default LoadList
;
