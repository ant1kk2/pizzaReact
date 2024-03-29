import React from "react";
import styles from "./styles.module.scss";

const CartItem = ({ item }) => {
  return (
    <li className={styles.cart__item}>
      <div className={styles.cart__product}>
        <div className={styles.cart__imgContainer}>
          <img className={styles.cart__img} src={item.image} alt={item.alt} />
        </div>
        <p className={styles.cart__title}>{item.title}</p>
        <p className={styles.cart__size}>{typeof item.sizes[0] === 'number' ? `${item.sizes[0]} см` : `${item.sizes[0]}`}</p>
      </div>
      <div className={styles.cart__price}>{`${item.oldPrice[0]} грн`}</div>
      <button className={styles.cart__delBtn}>Видалити</button>
    </li>
  );
};

export default CartItem;
