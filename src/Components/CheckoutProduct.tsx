import React from "react";
import "../ComponentsCss/CheckoutProduct.css";
import { useStateValue } from "../store/StateProvider";

interface props {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
}

function CheckoutProduct({ id, image, title, price, rating }: props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₩</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating).fill(<p>⭐️</p>)}
        </div>
        <button onClick={removeFromBasket}>제거하기</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
