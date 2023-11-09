import React from "react";
import { useWindowMeasurements } from "../../hooks/useWindowMeasurements";

export default function Measurements() {
  const { heigth, width } = useWindowMeasurements();
  return (
    <div>
      <p>Heigth: {heigth}</p>
      <p>Width: {width}</p>
    </div>
  );
}
