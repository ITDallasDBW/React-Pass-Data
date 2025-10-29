import axios from "axios";
import React, { useState } from "react";
import ShowMovies from "./ShowMovies";
import SortData from "./SortData";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Main = () => {
  const [apiResp, setApiResp] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [dataToShow, setDataToShow] = useState([]);
  const [pageDisplay, setPageDisplay] = useState("showHome");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // const handleSubmit = async (inputValue) => {
  //   const results = await movieSearch(inputValue);
  //   setApiResp(results);
  // }


  const handleSubmit = () => {
    getData(inputValue);
  };


  async function getData(inputValue) {
    setLoading(true);
    // setPageDisplay(showMovie);
    const { data } = await axios.get(
      //Send input value to API
      `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
    );
    setApiResp(data.Search || []); //Store response in apiResp
    setDataToShow(data.Search);
    console.log(data.Search);
    setLoading(false);
  }

  const handleSort = (sorted) => {
    setDataToShow(sorted);
  }

  return (
    <>
      <section className="search">
        <input
          type="text"
          id="idBox"
          onChange={handleInputChange}
          onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
        />
        <button id="idBtn" onClick={handleSubmit}>
          Submit
        </button>
        
        {apiResp.length > 0 && (
          //Once user searches...
          <>
            {/* <p>This is for {apiResp[0]?.Title}</p>
            {apiResp[1] && <p>This is for {apiResp[1]?.Title}</p>} */}
            <SortData dataToSort={apiResp} onSort={handleSort} />
            <ShowMovies dataToShow={dataToShow} />
          </>
      )}
      </section>
    </>
  );
};

export default Main;
