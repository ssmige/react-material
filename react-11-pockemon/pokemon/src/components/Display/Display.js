import React, { useState, useEffect } from "react";
import axios from "axios";
import second from "first";

export default function Display() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [type, setType] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  URL = "https:pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setName(response.data.name);
        setImg(response.data.sprites.front_default);
        setType(response.data.types[0].type.name);
        setWeight(response.data.weight);
        setHeight(response.data.height);
      })
      .catch((err) => alert(err));
  });

  return (
    <div>
      <h1>Pokemon</h1>
      <h2>Name: {name}</h2>
      <h3>Type: {type} </h3>
      <h3>Weigth: {weight} </h3>
      <h3>Height: {height} </h3>
      <img src={img} alt="" />
    </div>
  );
}
