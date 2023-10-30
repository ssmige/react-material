import "./App.css";
import Modal from "./components/Modal.js/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleButton}>Open</button>
      <Modal isOpen={isModalOpen} />
    </div>
  );
}

export default App;
