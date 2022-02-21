import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Test from "./components/Products/Test";
import ProductView from "./components/Products/ProductView";
import { createContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import List from "./components/Cart/List.jsx";

export const UserContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <UserContext.Provider value={[cartItems, setCartItems]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<List />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
