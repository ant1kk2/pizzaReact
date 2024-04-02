import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import PizzaItem from "../../Components/PizzaItem/PizzaItem.jsx";

import { useSelector } from "react-redux";

const MainPage = () => {
  const pizzas = useSelector((state) => state.pizzas);
  const coffes = useSelector((state) => state.coffes);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (!pizzas.loading && !coffes.loading) {
      setLoading(false);
    }
  }, [pizzas, coffes]);

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
              src="/assets/images/mainSlider/mainSlide-1.jpg"
              alt="slide image"
            />
          </div>
        </div>
        <div className={styles.promotions}>
          <h3 className={styles.promotions__title}>
            Вигідні пропозиції цього тижня
          </h3>
          <p className={styles.promotions__text}>
            Обирай маленьку піцу з кавою американо та отримуй знижку 10%
          </p>
          <div className={styles.promotions__cards}>
            {!loading &&
              pizzas.pizzasList.map((pizza, index) => {
                if (pizza.isPromotions) {
                  return (
                    <PizzaItem
                      coffe={coffes.coffesList[0]}
                      pizza={pizza}
                      key={index}
                      isPromotions={pizza.isPromotions}
                    />
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
