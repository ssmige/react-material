import React, { useState } from "react";
import { useAddition } from "../../hooks/useAddition";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  // šią funkciją iškeliam į hooks ir šiek tiek koreguojam (ištrinam useEffect, parašom)
  //   const [sum, setSum] = useState(0);

  //   useEffect(() => {
  //     const result = +firstNumber + +secondNumber;
  //     setSum(result);
  //   }, [firstNumber, secondNumber]);

  // hooksui
  const sum = useAddition(+firstNumber, +secondNumber);

  const sum2 = useAddition(10, 25);

  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      ></input>
      <br />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      ></input>
      <h1>{sum}</h1>
      <h2>{sum2}</h2>
    </div>
  );
}
