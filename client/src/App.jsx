import React from "react";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import { useDispatch } from "react-redux";
import { addProductsFromLocalStorage } from "./redux/slices/cart.slice.js";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      window.localStorage.getItem("cart")
    );
    if (cartFromLocalStorage !== null) {
      dispatch(addProductsFromLocalStorage(cartFromLocalStorage));
    }
  });
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
