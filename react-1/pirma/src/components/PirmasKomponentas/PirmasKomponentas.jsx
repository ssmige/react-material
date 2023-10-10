import React from "react";
import AntrasKomponentas from "../AntrasKomponentas/AntrasKomponentas";

export default function PirmasKomponentas() {
  const age = 20;
  return (
    <div>
      <h1>{age + 10} </h1>
      <AntrasKomponentas />
      <button onClick={() => console.log("Button Clicked")}>Click me</button>
    </div>
  );
}
