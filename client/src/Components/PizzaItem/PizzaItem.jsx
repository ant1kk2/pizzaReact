import React from "react";
import styles from "./styles.module.scss";

const PizzaItem = ({ pizza, coffe, isPromotions }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const sizeClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <li
      className={`${styles.pizza__item} ${
        pizza.availability ? "" : styles.inactive
      }`}
    >
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
              pizza.oldPrice[0] +
              coffe.oldPrice[0] -
              (pizza.oldPrice[0] + coffe.oldPrice[0]) * 0.1
            } грн`}</span>{" "}
            <span>{`${pizza.oldPrice[0] + coffe.oldPrice[0]} грн`}</span>
          </>
        ) : (
          <span>{`${pizza.oldPrice[activeIndex]} грн`}</span>
        )}
      </p>
      <button className={styles.pizza__cardBtn}>Замовити</button>
    </li>
  );
};

export default PizzaItem;
