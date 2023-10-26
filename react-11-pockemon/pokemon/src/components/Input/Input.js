import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Input() {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => console.log(response));
  };

  return (
    <div>
      <label htmlFor="searchInput"></label>
      <input type="search" onChange={(e) => setPokemonName(e.target.value)} />
      <button type="submit" onClick={searchPokemon}>
        Search Pokemon
      </button>
    </div>
  );
}
