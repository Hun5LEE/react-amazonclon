import React from "react";
import "../ComponentsCss/Payment.css";
import CheckoutProduct from "../Components/CheckoutProduct";
import { useStateValue } from "../store/StateProvider";
import { useNavigate } from "react-router-dom";

interface props {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
}

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1 className="checkout_link" onClick={() => navigate("/checkout")}>
          장바구니로 돌아가기 ({basket?.length} 개의 상품목록이 존재합니다)
        </h1>
        <br />
        <div className="payment_section">
          <div className="payment_title">
            <h3>배달 받을 곳</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email} 님의 주소</p>
            <p>경기도</p>
            <p>남양주시</p>
          </div>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>상품 목록</h3>
        </div>
        <div className="payment_items">
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
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3> 결제 </h3>
        </div>
        <div className="payment_details"></div>
      </div>
    </div>
  );
}

export default Payment;
