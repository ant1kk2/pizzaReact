import coffeAmericano from "./../assets/images/coffes/cofe-americano.jpg";
import cofeCapuchino from "./../assets/images/coffes/cofe-capuchino.jpg";
import cofeEspresso from "./../assets/images/coffes/cofe-espresso.jpg";
import cofeLatte from "./../assets/images/coffes/cofe-latte.jpg";
import pizzaMargarita from "./../assets/images/pizzas/pizza-margarita.jpg";
import pizza4Cheese from "./../assets/images/pizzas/pizza-4cheese.jpg";
import pizzaHavay from "./../assets/images/pizzas/pizza-havay.jpg";
import pizzaCalcone from "./../assets/images/pizzas/pizza-calcone.jpg";
import pizzaCaprichoze from "./../assets/images/pizzas/pizza-capricciosa.jpg";

const cart = [
  {
    id: 92,
    image: cofeCapuchino,
    alt: "capuchino image",
    title: "Капучіно",
    sizes: ["Маленький", "Середній", "Великий"],
    newPrice: [27, 36, 45],
    oldPrice: [30, 40, 50],
  },
  {
    id: 5,
    image: pizzaCaprichoze,
    alt: "caprichoze image",
    title: "ПІЦА КАПРИЧОЗE",
    ingridients:
      "Фірмовий томатний соус, моцарелла, моцарелла черрі, помідор, маслини, гриби, шинка",
    sizes: [30, 40, 50],
    newPrice: [230, 252, 270],
    oldPrice: [255, 280, 300],
    isPromotions: false,
    availability: true,
  },
];

export default cart