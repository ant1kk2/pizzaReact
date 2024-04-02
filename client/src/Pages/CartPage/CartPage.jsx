import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import CartItem from "../../Components/CartItem/CartItem.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { discount } from "../../content/pizzas.js";

const CartPage = () => {
  const pizzas = useSelector((state) => state.pizzas);
  const coffes = useSelector((state) => state.coffes);
  const cartProducts = useSelector((state) => state.cart.products);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (!pizzas.loading && !coffes.loading) {
      setLoading(false);
    }
  }, [pizzas, coffes]);


  return (
    <div className={styles.cartPage}>
      <div className={`container ${styles.container}`}>
        {loading ? <div>LOADING...</div> : cartProducts.length ? (
          <>
            {" "}
            <ul className={styles.cart__list}>
              {cartProducts.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}
            </ul>
            <div className={styles.cart__allPrice}>
              <span>Усього </span>
              <span>{`${cartProducts.reduce((p, c) => {
                if (c.isPromotions) {
                  return (
                    p +
                    (c.prices[0] * discount +
                      coffes.coffesList[0].prices[0] * discount) *
                      c.count
                  );
                }
                return p + c.currentPrice * c.count;
              }, 0)} грн`}</span>
            </div>
            <div className={styles.cart__btnContainer}>
              <button className={styles.cart__btn}>Замовити</button>
            </div>
          </>
        ) : (
          <div className={styles.wantContainer}>
            <p className={styles.want}>Ще нічого не додано</p>
            <Link className={styles.link} to="/menu">
              Хочу їсти
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
