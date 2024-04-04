import React from "react";
import styles from "./styles.module.scss";

import ModalDelFromCartConfirm from "./../ModalDelFromCartConfirm/ModalDelFromCartConfirm.jsx";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const coffes = useSelector((state) => state.coffes.coffesList);
  const discount = useSelector((state) => state.pizzas.discount);

  const [isVisibleModal, setIsVisibleModal] = React.useState(false);

  function showDelProductModal() {
    setIsVisibleModal(true);
  }

  return (
    <li className={styles.cart__item}>
      {isVisibleModal && (
        <ModalDelFromCartConfirm
          pizza={item}
          setIsVisibleModal={setIsVisibleModal}
        />
      )}
      <div className={styles.cart__product}>
        <div className={styles.cart__imgContainer}>
          <img className={styles.cart__img} src={item.image} alt={item.alt} />
        </div>

        <p className={styles.cart__title}>
          {item.isPromotions
            ? `${item.title} ${item.count} шт з кавою`
            : `${item.title} ${item.count} шт`}
        </p>
        <p className={styles.cart__size}>
          {typeof item.sizes[0] === "number"
            ? item.isPromotions
              ? `${item.sizes[0]} см`
              : `${item.currentSize} см`
            : item.isPromotions
            ? `${item.sizes[0]}`
            : `${item.currentSize}`}
        </p>
      </div>
      <div className={styles.cart__price}>
        {item.isPromotions
          ? `${(item.prices[0] + coffes[0].prices[0]) * discount} * ${
              item.count
            } = ${
              (item.prices[0] + coffes[0].prices[0]) * discount * item.count
            } грн`
          : `${item.currentPrice} * ${item.count} = ${
              item.currentPrice * item.count
            } грн`}
      </div>
      <button
        onClick={() => {
          showDelProductModal();
        }}
        className={styles.cart__delBtn}
      >
        Видалити
      </button>
    </li>
  );
};

export default CartItem;
