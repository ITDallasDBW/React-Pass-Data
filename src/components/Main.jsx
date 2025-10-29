import axios from "axios";
import React, { useState } from "react";
import ShowMovies from "./ShowMovies";
import SortData from "./SortData";
import InputFn from "./InputFn";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Main = () => {
  const [apiResp, setApiResp] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dataToShow, setDataToShow] = useState([]);
  const [pageDisplay, setPageDisplay] = useState("showHome");
  const [loading, setLoading] = useState(true); // Start with true

  //get search term, setLoading, search for movie,
  //await response, set response to dataToShow, stop loading
  async function getData(inputValue) {
    try {
      console.log("Before loading:", loading);
      setLoading(true);
      console.log("After setLoading(true):", loading);

      setApiResp([]);
      setDataToShow([]);

      const { data } = await axios.get(
        `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
      );

      console.log("Before setting data:", loading);
      const searchResults = data.Search || [];
      setApiResp(searchResults);
      setDataToShow(searchResults);

      console.log("Before setLoading(false):", loading);
      setLoading(false);
      console.log("After setLoading(false):", loading);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSort = (sorted) => {
    setDataToShow(sorted);
  };

  return (
    <>
      <section className="search">
        <InputFn onSubmit={getData} />

        {apiResp.length > 0 && (
          <SortData dataToSort={apiResp} onSort={handleSort} />
        )}
        
        <ShowMovies dataToShow={dataToShow} loading={loading} />

      </section>
    </>
  );
};

export default Main;
