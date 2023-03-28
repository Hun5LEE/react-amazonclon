import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./Components/Payment";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  // useEffect를 이용하여 mount시 한번만 실행하여 로그인상태를 알려줌.
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(auth);
      if (auth) {
        dispatch({
          type: "SET_USER",
          user: auth,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
