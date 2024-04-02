import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import PizzaItem from "./../../Components/PizzaItem/PizzaItem.jsx";
import CoffeItem from "../../Components/CoffeItem/CoffeItem.jsx";
import { useSelector } from "react-redux";

const MenuPage = () => {
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
    <div className={styles.menuPage}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Наши піци</h2>
        <ul className={styles.pizza}>
          {!loading && pizzas.pizzasList.map((pizza, index) => {
            return <PizzaItem key={index} pizza={pizza} isPromotions={false} />;
          })}
        </ul>
        <h2 className={styles.title}>Наша кава</h2>
        <ul className={styles.coffe}>
          {!loading && coffes.coffesList.map((coffe, index) => {
            return <CoffeItem coffe={coffe} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;
