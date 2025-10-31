import axios from "axios";
import React, { useState } from "react";
import ShowMovies from "./ShowMovies";
import SortData from "./SortData";
import InputFn from "./InputFn";
import ShowFeature from "./ShowFeature";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Main = () => {
  const [apiResp, setApiResp] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dataToShow, setDataToShow] = useState([]);
  const [loading, setLoading] = useState(false); // Start with true
  const [feature, setFeature] = useState({});

  //Reset to default
  const handleHome = () => {
    setApiResp([]);
    setInputValue("");
    setDataToShow([]);
    setLoading(false);
    setFeature({});
  };
  
  //get search term, setLoading, search for movie,
  //await response, set response to dataToShow, stop loading
  async function getData(inputValue) {
    try {
      setLoading(true);
      setApiResp([]);
      setDataToShow([]);
      const { data } = await axios.get(
        `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
      );
      const searchResults = data.Search || [];
      setApiResp(searchResults);
      setDataToShow(searchResults);
      setLoading(false);
    } catch (error) {}
  }

  const handleSort = (sorted) => {
    setDataToShow(sorted);
  };
  //check if feature is empty (whether to display list or feature)
  const isFeatureEmpty = Object.keys(feature).length === 0;

  // go back to movies
  const handleBackToMovies = () => {
    setFeature({});
  };


  return (
    <>
      <section className="search">
        <button onClick={handleHome}>Home</button>
        <InputFn onSubmit={getData} />
        {apiResp.length > 0 && (
          <SortData dataToSort={apiResp} onSort={handleSort} />
        )}
        {isFeatureEmpty ? (
          <ShowMovies
            dataToShow={dataToShow}
            currentLoading={loading}
            updateLoading={setLoading}
            setFeature={setFeature}
          />
        ) : (
          <>
            <button onClick={handleBackToMovies}>Back to Movies</button>
            <ShowFeature feature={feature} />
          </>
        )}
      </section>
    </>
  );
};

export default Main;
