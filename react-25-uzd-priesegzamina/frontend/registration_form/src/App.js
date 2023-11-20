import "./App.css";
import Modal from "./Modal/Modal";
import { useState } from "react";
import Form from "./components/Form/Form";

import MainPage from "./components/MainPage/MainPage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }
  return (
    <div>
      <MainPage />

      <button onClick={handleButton}>Open</button>
      <Modal
        isOpen={isModalOpen}
        title={"Get Started"}
        text={"Already have an account?"}
        linkTitle={"sing in"}
      >
        <Form />
      </Modal>
    </div>
  );
}

export default App;
