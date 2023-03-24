import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// Context는 성능이슈 때문에 라이브러리 사용하는것도 괜찮은 방법임.(Redux)

// index.js 에서 StateProvier 로 감싸고 App을 children으로 넘김.
