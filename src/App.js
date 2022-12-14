import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import UseEffectTest from "./components/UseEffectTest";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ZillowHeader from "./components/ZillowHeader";
import ZillowHome from "./components/ZillowHome";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "sk_test_51MCOU1GAwKU2n2ZLmVldzbEMCedrIwb5xo9PatJSLBJCwrQozlXNAc9mQKZKIA70qNLEeyyMNc77am49ysmIoGzR00LdZnihW5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
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
    <div className="app">
      {/* <UseEffectTest /> */}
      {/* <ZillowHeader />
      <ZillowHome /> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
