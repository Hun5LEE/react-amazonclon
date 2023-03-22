import React from "react";
import "../ComponentsCss/Product.css";
interface props {
  id: number;
  title: string;
  price: string;
  image: string;
  rating: number;
}

function Product({ id, title, image, price, rating }: props) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        {/* Array( rating ).fill()을 사용하여 props로 받은 숫자만큼 별채우기. */}
        <div className="product_rating">{Array(rating).fill(<p>⭐️</p>)}</div>
      </div>
      <img src={image} alt="" style={{ width: "300px" }} />
      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;
