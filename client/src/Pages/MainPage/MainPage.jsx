import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";

import PizzaItem from "../../Components/PizzaItem/PizzaItem.jsx";
import pizzas from "../../content/pizzas";

import mainSlideImg_1 from "./../../assets/images/mainSlider/mainSlide-1.jpg";
import coffes from "../../content/coffes.js";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={`container ${styles.container}`}>
        <div className={styles.slide}>
          <div className={styles.slide__textContainer}>
            <h2 className={styles.slide__title}>
              Ласкаво просимо до нашої піцерії!
            </h2>
            <p className={styles.slide__text}>
              Відкрийте для себе неперевершений світ смаків та ароматів з нашими
              свіжими та чудовими піцами.
            </p>
          </div>
          <div className={styles.slide__imageContainer}>
            <img
              className={styles.slide__image}
              src={mainSlideImg_1}
              alt="slide image"
            />
          </div>
        </div>
        <div className={styles.promotions}>
          <h3 className={styles.promotions__title}>
            Вигідні пропозиції цього тижня
          </h3>
          <p className={styles.promotions__text}>Обирай маленьку піцу з кавою американо та отримуй знижку 10%
          </p>
          <div className={styles.promotions__cards}>
            {pizzas.map((pizza, index) => {
              if (pizza.isPromotions) {
                return <PizzaItem coffe={coffes[0]} key={index} pizza={pizza} isPromotions={pizza.isPromotions}/>
              } 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
