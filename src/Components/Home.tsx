import React from "react";
import "../ComponentsCss/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* 홈 배경 */}
        <img
          className="home_image"
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
          alt=""
        />
        {/* 상품 */}
        <div className="home_row">
          <Product
            id={0}
            title="제품1"
            price="5000"
            image={
              "https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
            }
            rating={5}
          />
          <Product
            id={1}
            title="제품2"
            price="300"
            image={
              "https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
            }
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id={2}
            title="제품3"
            price="500"
            image={
              "https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
            }
            rating={3}
          />
          <Product
            id={3}
            title="제품4"
            price="5000"
            image={
              "https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={4}
            title="제품5"
            price="400"
            image={
              "https://www.motoya.co.kr/news/photo/old/data/adm_ssts/pressphoto/Park/Oversea/2016/0212/mazdacx9/01.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
