import "./App.css";
import { useMemo, useCallback } from "react";
function App() {
  function heavyCalculation() {
    let x = 0;
    for (let i = 0; i < 99999999999; i++) {
      x++;
    }
  }

  return <div></div>;
}

export default App;
