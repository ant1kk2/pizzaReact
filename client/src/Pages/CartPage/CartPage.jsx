import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";
import CartItem from "../../Components/CartItem/CartItem.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalSendForm from "../../Components/ModalSendForm/ModalSendForm.jsx";
import ModalOrderInfo from "../../Components/ModalOrderInfo/ModalOrderInfo.jsx";

const CartPage = () => {
  const pizzas = useSelector((state) => state.pizzas);
  const coffes = useSelector((state) => state.coffes);
  const cartProducts = useSelector((state) => state.cart.products);
  const discount = useSelector((state) => state.pizzas.discount);
  const [loading, setLoading] = React.useState(true);
  const [isVisibleModal, setIsVisibleModal] = React.useState(false);
  const [isVisibleOrderInfo, setIsVisibleOrderInfo] = React.useState(false);
  const [clientInfo, setClientInfo] = React.useState({});

  const showSendForm = () => {
    setIsVisibleModal(true);
  };
  const showOrderInfo = () => {
    setIsVisibleOrderInfo(true);
  };

  React.useEffect(() => {
    setLoading(true);
    if (!pizzas.loading && !coffes.loading) {
      setLoading(false);
    }
  }, [pizzas, coffes]);

  return (
    <div className={styles.cartPage}>
      {isVisibleModal && (
        <ModalSendForm
          setIsVisibleModal={setIsVisibleModal}
          showOrderInfo={showOrderInfo}
          setClientInfo={setClientInfo}
        />
      )}

      {isVisibleOrderInfo && (
        <ModalOrderInfo
          clientInfo={clientInfo}
          setIsVisibleOrderInfo={setIsVisibleOrderInfo}
        />
      )}

      <div className={`container ${styles.container}`}>
        {loading ? (
          <div>LOADING...</div>
        ) : cartProducts.length ? (
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
                    (c.prices[0] + coffes.coffesList[0].prices[0]) *
                      discount *
                      c.count
                  );
                }
                return p + c.currentPrice * c.count;
              }, 0)} грн`}</span>
            </div>
            <div className={styles.cart__btnContainer}>
              <button onClick={showSendForm} className={styles.cart__btn}>
                Замовити
              </button>
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
