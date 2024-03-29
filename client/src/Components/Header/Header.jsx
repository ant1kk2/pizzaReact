import React from "react";
import styles from "./styles.module.scss";
import "./../../styles/container.scss";
import HeaderMenu from "./HeaderMenu/HeaderMenu.jsx";
import HeaderLogo from "./HeaderLogo/HeaderLogo.jsx";
import HeaderCart from "./HeaderCart/HeaderCart.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <HeaderLogo />
        <HeaderMenu />
        <HeaderCart />
      </div>
    </header>
  );
};

export default Header;
