import React from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./../../redux/slices/cart.slice.js";

const ModalOrderInfo = ({ clientInfo, setIsVisibleOrderInfo }) => {
  const order = useSelector((state) => state.cart.products);
  const dispatch = useDispatch()

  const hideModal = () => {
    setIsVisibleOrderInfo(false)
    dispatch(clearCart())
  }

  return (
    <div className={`${styles.modal}`}>
      <div className={styles.modal__container}>
        <h3 className={styles.modal__title}>Ваше замовлення прийняте</h3>
        <p className={styles.modal__text}>Склад замовлення:</p>
        {order.map((product) => {
          return (
            <div className={styles.modal__product}>
              <p className={styles.modal__productTitle}>
                {product.title}{" "}
                {typeof product.currentSize === "number"
                  ? `${product.currentSize} см`
                  : `${product.currentSize}`}
              </p>
              <p className={styles.modal__productCount}>
                Кількість {product.count} шт.
              </p>
              <p className={styles.modal__productPrice}>
                Вартість {product.count * product.currentPrice} грн
              </p>
            </div>
          );
        })}
        <p className={styles.modal__text}>Інформація про клієнта</p>
        <p className={styles.modal__client}>Імʼя: {clientInfo.name}</p>
        <p className={styles.modal__client}>Прізвище: {clientInfo.surname}</p>
        <p className={styles.modal__client}>Телефон: {clientInfo.tel}</p>
        <p className={styles.modal__client}>
          Обраний спосіб отримання: {" "}
          {clientInfo.isDelivery ? "Доставка" : "Самовивіз"}
        </p>
        {clientInfo.isDelivery ? (
          <p className={styles.modal__client}>Адреса: {clientInfo.adress}</p>
        ) : (
          ""
        )}
        <button onClick={hideModal} className={styles.modal__btn}>Вихід</button>
      </div>
    </div>
  );
};

export default ModalOrderInfo;
