import coffeAmericano from "./../assets/images/coffes/cofe-americano.jpg";
import cofeCapuchino from "./../assets/images/coffes/cofe-capuchino.jpg";
import cofeEspresso from "./../assets/images/coffes/cofe-espresso.jpg";
import cofeLatte from "./../assets/images/coffes/cofe-latte.jpg";

const coffes = [
  {
    id: 91,
    image: coffeAmericano,
    alt: "americano image",
    title: "Кава Американо",
    sizes: ["Маленький", "Середній", "Великий"],
    newPrice: [27, 36, 45],
    oldPrice: [30, 40, 50],
  },
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
    id: 93,
    image: cofeEspresso,
    alt: "espresso image",
    title: "Еспресо",
    sizes: ["Маленький", "Середній"],
    newPrice: [27, 36],
    oldPrice: [30, 40],
  },

  {
    id: 94,
    image: cofeLatte,
    alt: "latte image",
    title: "Латте",
    sizes: ["Маленький", "Середній", "Великий"],
    newPrice: [27, 36, 45],
    oldPrice: [30, 40, 50],
  },
];

export default coffes;
