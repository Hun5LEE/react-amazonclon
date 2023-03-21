import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>제품1</p>
        <p className="product_price">
          <small>가격</small>
          <strong>10,000</strong>
          <small>원</small>
        </p>
        <div className="product_rating">
          <p>⭐️⭐️</p>
          <p>⭐️⭐️</p>
          <p>⭐️⭐️</p>
          <p>⭐️⭐️</p>
        </div>
      </div>
      <img
        src="https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
        alt=""
        style={{ width: "300px" }}
      />
      <button>장바구니에 담기</button>
    </div>
  );
}

export default Product;
