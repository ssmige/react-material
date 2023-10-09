// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Header />
        </header>
      </div>
      <div>
        {" "}
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
