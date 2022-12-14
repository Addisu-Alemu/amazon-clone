import React from "react";
import "./Checkout.css";
import banner from "./banner.jpg";
import Subtotal from "./Subtotal";

import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Header from "./Header";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      {/* {user.email} */}

      <div className="checkout">
        <div className="checkout__left">
          <img className="checkout__ad" src={banner} alt="amazon banner" />
          <div className="checkout__title">
            <h3>Hello, {user?.email} </h3>
            Your shopping basket
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <h2></h2>
        </div>
        <Subtotal />
      </div>
    </>
  );
}

export default Checkout;
