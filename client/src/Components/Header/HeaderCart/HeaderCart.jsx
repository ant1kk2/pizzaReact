import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const HeaderCart = () => {
  return (
    <div>
      <Link className={styles.cart} to="/cart">
        <span className={styles.count}>2</span>
      </Link>
    </div>
  );
};

export default HeaderCart;
