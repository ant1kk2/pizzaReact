import React from "react";
import MainPage from "../../Pages/MainPage/MainPage.jsx";
import MenuPage from "../../Pages/MenuPage/MenuPage.jsx";
import AboutUsPage from "../../Pages/AboutUsPage/AboutUsPage.jsx";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage.jsx";
import CartPage from "../../Pages/CartPage/CartPage.jsx";
import { Route, Routes } from "react-router";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route index={true} element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Main;
