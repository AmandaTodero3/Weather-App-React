import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import SearchEngine from "./SearchEngine";
import "./Weather.css";

export default function App() {
  return (
    <div className="card">
      <div className="card-body">
        <SearchEngine />
        <h3 className="city">Mooresville</h3>
        <h3 className="day">Thurs: 12:06pm </h3>
        <h1>63°F</h1>
        <br />
        <ul>
          <li className="precip">Precipitation:</li>
          <li className="humid">Humidity:</li>
        </ul>
        <small>
          <a href="https://github.com/AmandaTodero3/Plus-Weather-App">
            Open Source Code
          </a>{" "}
          by Amanda Todero
        </small>
        <img src="src/cutesun.png" alt="Sun icon" />
      </div>
    </div>
  );
}
