import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import CartItem from "../../Components/CartItem/CartItem.jsx";
import cart from "../../content/cart";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <div className={`container ${styles.container}`}>
        {cart.length ? (
          <>
            {" "}
            <ul className={styles.cart__list}>
              {cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}
            </ul>
            <div className={styles.cart__allPrice}>
              <span>Усього </span>
              <span>{`${cart.reduce(
                (p, c) => p + c.oldPrice[0],
                0
              )} грн`}</span>
            </div>
            <div className={styles.cart__btnContainer}>
              <button className={styles.cart__btn}>Замовити</button>
            </div>
          </>
        ) : (
          <div className={styles.wantContainer}>
            <p className={styles.want}>Ще нічого не додано</p>
            <Link className={styles.link} to='/menu'>Хочу їсти</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
