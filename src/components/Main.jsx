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
  const [loading, setLoading] = useState(false);

  //get search term, setLoading, search for movie, 
  //await response, set response to dataToShow, stop loading
  async function getData(inputValue) {
    setLoading(true);
    console.log(loading);
    // setPageDisplay(showMovie);
    const { data } = await axios.get(
      //Send input value to API
      `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
    );
    setApiResp(data.Search || []); //Store response in apiResp
    setDataToShow(data.Search);
    // console.log(data.Search);
    setLoading(false);
  }

  const handleSort = (sorted) => {
    setDataToShow(sorted);
  }

  return (
    <>
      <section className="search">
        <InputFn onSubmit={getData} />
        {/* Once user searches */}

        {loading && (
          <h1>Loading...</h1>
        )}
        {apiResp.length > 0 && (// data returns from API, send to sort
          <>
            <SortData dataToSort={apiResp} onSort={handleSort} />
            {/* Sorted movie data set is sent to display fn */}

            <ShowMovies dataToShow={dataToShow} loading={loading} />
            {/* Movies get displayed per sort order */}

          </>
      )}
      </section>
    </>
  );
};

export default Main;
