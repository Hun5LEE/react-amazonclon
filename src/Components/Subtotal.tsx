import React, { useState } from "react";
import "../ComponentsCss/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        // reunderText에의해 안에 코드가 렌더링됨.
        renderText={(value) => {
          return (
            <>
              <p>
                총액 ( {basket.length} items) : <strong> 0원 </strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> 체크박스 입니다.
              </small>
            </>
          );
        }}
        // decimalScale={2} 소수점 둘째자리 까지 보여줌.
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₩"}
      />
      <button>결제하기</button>
    </div>
  );
}

export default Subtotal;
