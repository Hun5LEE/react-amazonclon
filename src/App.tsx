import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
