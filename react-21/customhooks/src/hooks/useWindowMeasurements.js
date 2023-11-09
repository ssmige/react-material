import { useEffect, useState } from "react";

export function useWindowMeasurements() {
  const [heigth, setHeigth] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeCallback = (e) => {
      setHeigth(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);
  return {
    heigth,
    width,
  };
}
