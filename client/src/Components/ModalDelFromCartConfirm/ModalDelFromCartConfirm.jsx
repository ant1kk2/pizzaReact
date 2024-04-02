import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { delFromCartProduct } from "./../../redux/slices/cart.slice";

const ModalDelFromCartConfirm = ({ pizza, setIsVisibleModal }) => {

  const dispatch = useDispatch();

  const delFromCartProd = (product) => {
    dispatch(delFromCartProduct(product));
    setIsVisibleModal(false);
  };

  const closeModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <div className={`${styles.modal}`}>
      <div className={styles.modal__container}>
        <label className={styles.modal__title} htmlFor="countOfProduct">
          Ви впевнені?
        </label>

        <div className={styles.modal__btns}>
          <button
            onClick={() => {
              delFromCartProd(pizza);
            }}
            className={styles.modal__btn}
          >
            Абсолютно
          </button>
          <button onClick={closeModal} className={styles.modal__btn}>
            Відміна
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelFromCartConfirm;
