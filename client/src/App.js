import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [hitMovies, setHitMovies] = useState([]);

  let getHitMoviesList = async () => {
    let response = await axios.get("http://localhost:3434/hitMovies");

    setHitMovies(response.data);
  };

  return (
    <div className="App">
      <h1>Version 4.1</h1>
      <button
        onClick={() => {
          getHitMoviesList();
        }}
      >
        Get Hit Movies
      </button>
      {hitMovies.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
}

export default App;
