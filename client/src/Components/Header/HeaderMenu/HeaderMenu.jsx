import React from "react";
import styles from "./styles.module.scss";
import "./../../../styles/container.scss";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import headerMenu from "../../../content/headerMenu.js";

const HeaderMenu = () => {
  return (
    <ul className={styles.menu}>
      {headerMenu.map((item) => {
        return (
          <li className={styles.item}>
            <NavLink className={styles.link} to={item.path}>
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderMenu;
