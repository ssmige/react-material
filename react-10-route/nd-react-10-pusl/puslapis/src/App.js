import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
