import logo from "./logo.svg";
import "./App.css";
import PirmasKomponentas from "./components/PirmasKomponentas/PirmasKomponentas";
import AntrasKomponentas from "./components/AntrasKomponentas/AntrasKomponentas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PirmasKomponentas />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AntrasKomponentas />
        <PirmasKomponentas />
      </header>
    </div>
  );
}

export default App;
