import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const HeaderCart = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <div>
      <Link className={styles.cart} to="/cart">
        {cartProducts.length ? (
          <span className={styles.count}>{cartProducts.length}</span>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default HeaderCart;
