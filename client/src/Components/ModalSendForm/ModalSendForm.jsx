import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const ModalSendForm = ({ setIsVisibleModal, showOrderInfo, setClientInfo }) => {
  const [isActivePickupBtn, setIsActivePickupBtn] = React.useState(false);
  const [isActiveDeliveryBtn, setIsActiveDeliveryBtn] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [surnameValue, setSurnameValue] = React.useState("");
  const [telValue, setTelValue] = React.useState("");
  const [adressValue, setAdressValue] = React.useState("");
  const [isValidNameField, setIsValidNameField] = React.useState(false);
  const [isValidSurnameField, setIsValidSurnameField] = React.useState(false);
  const [isValidTelField, setIsValidTelField] = React.useState(false);
  const [isValidAdressField, setIsValidAdressField] = React.useState(false);

  const order = useSelector((state) => state.cart.products);

  const nameChange = (e) => {
    setIsValidNameField(false);
    const nameValue = e.target.value;
    const regex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґa-zA-Z]+$/;
    const isMatch = regex.test(nameValue.trim());
    if (isMatch) {
      setIsValidNameField(true);
    } else {
      setIsValidNameField(false);
    }
    setNameValue(e.target.value);
  };

  const surnameChange = (e) => {
    setSurnameValue(false);
    const surnameValue = e.target.value;
    const regex = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґa-zA-Z]+$/;
    const isMatch = regex.test(surnameValue.trim());
    if (isMatch) {
      setIsValidSurnameField(true);
    } else {
      setIsValidSurnameField(false);
    }
    setSurnameValue(e.target.value);
  };

  const adressChange = (e) => {
    setAdressValue(false);
    const adressValue = e.target.value;
    const regex = /^[0-9а-яА-ЯіїєґІЇЄҐa-zA-Z.,\/№'’" \-]+$/gm;
    const adressValueWithoutNewlines = adressValue.replace(/\s+/g, " ");
    const isMatch = regex.test(adressValueWithoutNewlines.trim());
    if (isMatch) {
      setIsValidAdressField(true);
      console.log(adressValueWithoutNewlines);
    } else {
      setIsValidAdressField(false);
    }
    setAdressValue(e.target.value);
  };

  const telChange = (e) => {
    setIsValidTelField(false);
    const telValue = e.target.value;
    const regex = /^\d{10}$/;
    const isMatch = regex.test(telValue.trim());
    if (isMatch) {
      setIsValidTelField(true);
    } else {
      setIsValidTelField(false);
    }
    setTelValue(e.target.value);
  };

  const setActivePickupBtn = () => {
    setIsActivePickupBtn(true);
    setIsActiveDeliveryBtn(false);
  };

  const setActiveDeliveryBtn = () => {
    setIsActiveDeliveryBtn(true);
    setIsActivePickupBtn(false);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  const showConfirmOrderModal = () => {
    setClientInfo({
      name: nameValue,
      surname: surnameValue,
      tel: telValue,
      adress: adressValue,
      isDelivery: isActiveDeliveryBtn,
    });
    sendOrderInfo();
    setIsVisibleModal(false);
    showOrderInfo(true);
  };

  const sendOrderInfo = async () => {
    const fullInfo = [
      ...order,
      {
        name: nameValue,
        surname: surnameValue,
        tel: telValue,
        deliveryMethod: isActiveDeliveryBtn ? "Доставка" : "Самовивіз",
        adress: isActiveDeliveryBtn ? adressValue : "",
      },
    ];
    try {
      const response = await fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullInfo),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке заказа");
      }
    } catch (error) {
      console.error("Ошибка отправки заказа:", error);
    }
  };

  return (
    <div className={`${styles.modal}`}>
      <div className={styles.modal__container}>
        <label className={styles.modal__title} htmlFor="name">
          Імʼя
        </label>
        <input
          className={styles.modal__input}
          type="text"
          id="name"
          name="name"
          value={nameValue}
          onChange={nameChange}
        />
        <label className={styles.modal__title} htmlFor="surname">
          Прізвище
        </label>
        <input
          className={styles.modal__input}
          type="text"
          id="surname"
          name="surname"
          value={surnameValue}
          onChange={surnameChange}
        />
        <label className={styles.modal__title} htmlFor="tel">
          Телефон у форматі 0681234567
        </label>
        <input
          className={styles.modal__input}
          type="tel"
          id="tel"
          name="tel"
          value={telValue}
          onChange={telChange}
        />

        <div className={styles.modal__btns}>
          <button
            onClick={() => {
              setActivePickupBtn();
            }}
            className={
              isActivePickupBtn
                ? `${styles.modal__btn} ${styles.active}`
                : styles.modal__btn
            }
          >
            Самовивіз
          </button>
          <button
            onClick={() => {
              setActiveDeliveryBtn();
            }}
            className={
              isActiveDeliveryBtn
                ? `${styles.modal__btn} ${styles.active}`
                : styles.modal__btn
            }
          >
            Доставка
          </button>
        </div>
        {isActiveDeliveryBtn && (
          <>
            <label className={styles.modal__title} htmlFor="adress">
              Введіть адресу
            </label>
            <textarea
              className={styles.modal__adress}
              name="adress"
              id="adress"
              value={adressValue}
              onChange={adressChange}
            ></textarea>
          </>
        )}

        <div className={styles.modal__btns}>
          <button
            onClick={showConfirmOrderModal}
            className={
              isValidNameField &&
              isValidSurnameField &&
              isValidTelField &&
              (isActivePickupBtn || (isActiveDeliveryBtn && isValidAdressField))
                ? `${styles.modal__btn} ${styles.active}`
                : `${styles.modal__btn} ${styles.inactive}`
            }
          >
            Замовити
          </button>
          <button
            onClick={hideModal}
            className={`${styles.modal__btn} ${styles.active}`}
          >
            Відміна
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSendForm;
