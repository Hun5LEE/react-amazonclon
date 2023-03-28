import React from "react";
import Subtotal from "../Components/Subtotal";
import CheckoutProduct from "../Components/CheckoutProduct";
import "../ComponentsCss/Checkout.css";
import { useStateValue } from "../store/StateProvider";

interface props {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
}

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
        <div>
          <h2 className="checkout_title">{user?.email}장바구니</h2>
        </div>
        {basket.map((item: props) => {
          return (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
