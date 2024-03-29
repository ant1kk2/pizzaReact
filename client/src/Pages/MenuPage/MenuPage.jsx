import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import pizzas from "../../content/pizzas";
import PizzaItem from "./../../Components/PizzaItem/PizzaItem.jsx";
import coffes from "../../content/coffes.js";
import CoffeItem from "../../Components/CoffeItem/CoffeItem.jsx";

const MenuPage = () => {
  return (
    <div className={styles.menuPage}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Наши піци</h2>
        <ul className={styles.pizza}>
          {pizzas.map((pizza, index) => {
            return (
             <PizzaItem key={index} pizza={pizza}/>
            );
          })}
        </ul>
        <h2 className={styles.title}>Наша кава</h2>
        <ul className={styles.coffe}>
          {coffes.map((coffe, index) => {
            return (
              <CoffeItem coffe={coffe} key={index}/>
            );
          })} 
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;
