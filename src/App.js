import "./App.css";
import Header from "./components/header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
