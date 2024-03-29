import pizzaMargarita from "./../assets/images/pizzas/pizza-margarita.jpg";
import pizza4Cheese from "./../assets/images/pizzas/pizza-4cheese.jpg";
import pizzaHavay from "./../assets/images/pizzas/pizza-havay.jpg";
import pizzaCalcone from "./../assets/images/pizzas/pizza-calcone.jpg";
import pizzaCaprichoze from "./../assets/images/pizzas/pizza-capricciosa.jpg";

const pizzas = [
  {
    id: 1,
    image: pizzaMargarita,
    alt: "margarita image",
    title: "ПІЦА МАРГАРИТА",
    ingridients: "Фірмовий томатний соус, моцарелла, помідори, базилік",
    sizes: [30, 40, 50],
    newPrice: [180, 207, 225],
    oldPrice: [200, 230, 250],
    isPromotions: true,
    availability: true,
  },
  {
    id: 2,
    image: pizza4Cheese,
    alt: "four cheese image",
    title: "ПІЦА ЧОТИРИ СИРУ",
    ingridients: "Вершковий соус, моцарелла, моцарелла чері, Дор Блю, пармезан",
    sizes: [30, 40],
    newPrice: [225, 243],
    oldPrice: [250, 270],
    isPromotions: true,
    availability: true,
  },
  {
    id: 3,
    image: pizzaHavay,
    alt: "havay image",
    title: "ПІЦА ГАВАЙСЬКА",
    ingridients:
      "Фірмовий томатний соус, моцарелла, філе куряче / шинка на вибір, ананас",
    sizes: [30, 40, 50],
    newPrice: [198, 216, 234],
    oldPrice: [220, 240, 260],
    isPromotions: true,
    availability: false,
  },

  {
    id: 4,
    image: pizzaCalcone,
    alt: "calcone image",
    title: "ПІЦА КАЛЬЦОНЕ",
    ingridients:
      "Фірмовий соус Барбекю, моцарелла, помідор, гриби, шинка, пармезан",
    sizes: [40, 50],
    newPrice: [180, 198],
    oldPrice: [200, 220],
    isPromotions: true,
    availability: true,
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

export default pizzas;
