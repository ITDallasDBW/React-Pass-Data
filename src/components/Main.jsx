import axios from "axios";
import React, { useState } from "react";
import ShowData from "../components/ShowData";

//API CREDS
const BASE_URL = `https://www.omdbapi.com/`;
const API_KEY = "c393ced6";

const Main = () => {
  const [apiResp, setApiResp] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    getData(inputValue);
  };

  async function getData(inputValue) {
    const { data } = await axios.get(
      //Send input value to API
      `${BASE_URL}?s=${inputValue}&apikey=${API_KEY}`
    );

    setApiResp(data.Search); //Store response in apiResp
    console.log(data.Search);
    {
      apiResp.length > 0 && 
      <ShowData dataToShow={apiResp} />;
    }
  }

  return (
    <div>
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
          <>
            <p>This is for {apiResp[0].Title}</p>
            <p>This is for {apiResp[1].Title}</p>
          </>
        )}
        <ShowData />
      </section>
    </div>
  );
};

export default Main;
