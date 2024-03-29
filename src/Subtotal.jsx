import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";
import { NavLink } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const payment = () => {
    return <h1>this is payemnt</h1>;
  };
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* <CurrencyFormat /> */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => navigate("/Payment")}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
