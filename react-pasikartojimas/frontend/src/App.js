import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/create" />
      </Routes>
    </div>
  );
}

export default App;
