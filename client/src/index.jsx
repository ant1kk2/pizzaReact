import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const mainEl = document.querySelector("#root");
const root = ReactDOM.createRoot(mainEl);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
