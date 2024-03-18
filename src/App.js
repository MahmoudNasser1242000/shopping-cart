import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import { Container } from "react-bootstrap";
import ShoppingCartContext from "./Context/ShoppingCartContext";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <>
      <ShoppingCartContext>
        <Header show={handleShow} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
          <ShoppingCart hide={handleHide} show={show} />
      </ShoppingCartContext>
    </>
  );
}

export default App;
