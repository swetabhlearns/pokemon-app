import "./App.css";
import Data from "./Data";
import React, { useEffect, useState } from "react";
import CentralModal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [indexTracker, setIndexTracker] = useState(0);
  const getInfo = async () => {
    const url = `https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson) {
      //   setMovieInfo(responseJson)
      setPokemonData(responseJson);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="App">
      <Data
        pokemonData={pokemonData.data}
        modalShow={modalShow}
        setModalShow={setModalShow}
        setIndexTracker={setIndexTracker}
      />
      <CentralModal
        pokemondata={pokemonData.data}
        show={modalShow}
        onHide={() => setModalShow(false)}
        indextracker={indexTracker}
      />
    </div>
  );
}

export default App;
