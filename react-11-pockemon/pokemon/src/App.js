import "./App.css";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h3>Pokemon </h3>
        <div>
          <Input />
        </div>
      </header>

      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;
