import React from "react";
import Subtotal from "../Components/Subtotal";
import "../ComponentsCss/Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          alt=""
        />
        <div>
          <h2 className="checkout_title">장바구니</h2>
        </div>
        {/* 장바구니 아이템 */}
        {/* 장바구니 아이템 */}
        {/* 장바구니 아이템 */}
        {/* 장바구니 아이템 */}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
