import React from "react";
import styles from "./styles.module.scss";
import ModalAddToCartConfirm from "./../ModalAddToCartConfirm/ModalAddToCartConfirm.jsx";
import { useSelector } from "react-redux";

const PizzaItem = ({ pizza, coffe, isPromotions }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisibleModal, setIsVisibleModal] = React.useState(false);
  const discount = useSelector((state) => state.pizzas.discount);

  const sizeClick = (index) => {
    setActiveIndex(index);
  };

  function showCountModal() {
    setIsVisibleModal(true);
  }

  return (
    <li
      className={`${styles.pizza__item} ${
        pizza.availability ? "" : styles.inactive
      }`}
    >
      {isVisibleModal && (
        <ModalAddToCartConfirm
          prod={pizza}
          sizeIndex={activeIndex}
          isPromotions={isPromotions}
          setIsVisibleModal={setIsVisibleModal}
        />
      )}

      <div className={styles.pizza__imgContainer}>
        <img className={styles.pizza__img} src={pizza.image} alt={pizza.alt} />
      </div>
      <p className={styles.pizza__cardTitle}>{pizza.title}</p>
      <p className={styles.pizza__cardIngridients}>{pizza.ingridients}</p>
      <div className={styles.pizza__sizes}>
        {isPromotions ? (
          <></>
        ) : (
          pizza.sizes.map((size, index) => {
            return (
              <button
                className={`${styles.pizza__size} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => sizeClick(index)}
              >
                {`${size} cм`}
              </button>
            );
          })
        )}
      </div>
      <p className={styles.pizza__cardPrice}>
        {isPromotions ? (
          <>
            <span>{`${
              (pizza.prices[0] + coffe.prices[0]) * discount
            } грн`}</span>{" "}
            <span>{`${pizza.prices[0] + coffe.prices[0]} грн`}</span>
          </>
        ) : (
          <span>{`${pizza.prices[activeIndex]} грн`}</span>
        )}
      </p>
      <button
        onClick={() => {
          showCountModal();
        }}
        className={styles.pizza__cardBtn}
      >
        Замовити
      </button>
    </li>
  );
};

export default PizzaItem;
