import React from "react";
import "./../../styles/container.scss";
import styles from "./styles.module.scss";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <div className={`container ${styles.container}`}>
        <p className={styles.description}>
          Ласкаво просимо до нашої піцерії! Ми – команда ентузіастів, які
          створюють найсмачніші піци в місті. Наша місія – радувати вас чудовими
          стравами та затишною атмосферою.
        </p>
        <p className={styles.missionStatement}>
          Наша мета – надати вам найкращі враження від піци. Ми використовуємо
          тільки найсвіжіші інгредієнти, уважно готуємо кожну страву та прагнемо
          бездоганного обслуговування.
        </p>
        <p className={styles.contactInfo}>
          <span>Зв'яжіться з нами, щоб замовити піцу зараз!</span>
          <a href="tel:+123123123">Телефон: +123123123</a>
          <a href="mailto:email@google.com">Email: email@google.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
