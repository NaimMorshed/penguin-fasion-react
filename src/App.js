import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Test from "./components/Products/Test";
import ProductView from "./components/Products/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Test />} />
        <Route path='/productView' element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
