import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addToCartProduct } from "./../../redux/slices/cart.slice";

const ModalAddToCartConfirm = ({
  prod,
  sizeIndex,
  isPromotions,
  setIsVisibleModal,
}) => {
  const [inputValue, setInputValue] = React.useState(1);

  const dispatch = useDispatch();

  const addToCartProd = (product) => {
    const newProduct = {
      ...product,
      count: inputValue,
      isPromotions: isPromotions,
      currentSize: product.sizes[sizeIndex],
      currentPrice: product.prices[sizeIndex],
    };
    dispatch(addToCartProduct(newProduct));
    setIsVisibleModal(false);
  };

  const closeModal = () => {
    setIsVisibleModal(false);
  };

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const stopKey = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.modal}`}>
      <div className={styles.modal__container}>
        <label className={styles.modal__title} htmlFor="countOfProduct">
          Введіть кількість
        </label>
        <input
          className={styles.modal__input}
          type="number"
          id="countOfProduct"
          min={1}
          onKeyDown={stopKey}
          value={inputValue}
          onChange={changeValue}
        />

        <div className={styles.modal__btns}>
          <button
            onClick={() => {
              addToCartProd(prod);
            }}
            className={styles.modal__btn}
          >
            Замовити
          </button>
          <button onClick={closeModal} className={styles.modal__btn}>
            Відміна
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddToCartConfirm;
