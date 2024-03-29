import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const HeaderLogo = () => {
  return (
    <div>
      <Link className={styles.logo} to="/"></Link>
    </div>
  );
};

export default HeaderLogo;
