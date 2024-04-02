import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

const mainEl = document.querySelector("#root");
const root = ReactDOM.createRoot(mainEl);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
