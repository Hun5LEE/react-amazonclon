import React, { useState } from "react";
import "../ComponentsCss/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getBasketTotal } from "../store/Reducer.js";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        // reunderText에의해 안에 코드가 렌더링됨.
        renderText={(value) => {
          return (
            <>
              <p>
                총액 ( {basket.length} items) : <strong> {value}원 </strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> 체크박스 입니다.
              </small>
            </>
          );
        }}
        // decimalScale={2} 소수점 둘째자리 까지 보여줌.
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₩"}
      />
      <button onClick={() => navigate("/payment")}>결제하기</button>
    </div>
  );
}

export default Subtotal;
