export const initialState = {
  basket: [],
};

// 총합계산
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => Number(item.price) + Number(amount), 0);
// string -> number로
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          " (id: " + action.id + ")이 장바구니에 존재하지 않습니다 "
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    // index에는 제거하기누른 인덱스(위치정보)가 담겨있다.
    default:
      return state;
  }
};

export default reducer;
