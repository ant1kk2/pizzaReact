import React from "react";
import styles from "./styles.module.scss";
import "./../../styles/container.scss";

const CoffeItem = ({ coffe }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const sizeClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <li className={styles.coffe__item}>
      <div className={styles.coffe__imgContainer}>
        <img className={styles.coffe__img} src={coffe.image} alt={coffe.alt} />
      </div>
      <p className={styles.coffe__cardTitle}>{coffe.title}</p>
      <div className={styles.coffe__sizes}>
        {coffe.sizes.map((size, index) => {
          return (
            <button
              className={`${styles.coffe__size} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => sizeClick(index)}
            >
              {`${size}`}
            </button>
          );
        })}
      </div>
      <p className={styles.coffe__cardPrice}>
        <span>{`${coffe.oldPrice[activeIndex]} грн`}</span>
      </p>
      <button className={styles.coffe__cardBtn}>Замовити</button>
    </li>
  );
};

export default CoffeItem;
