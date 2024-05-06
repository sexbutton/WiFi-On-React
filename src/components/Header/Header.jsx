//ХУКИ, БИБЛИОТЕКИ, МОДУЛИ И Т.Д
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
//КОМПОНЕНТЫ
import AddressClient from "./AddressClient/AddressClient";
import Nav from "./Nav/Nav";
//СТАТИКА
import styles from "./Header.module.css";
import logo from "./iconLogo.svg";
import iconComparison from "./iconComparison.svg";
import menu from "./iconMenu.svg";

const Header = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth > 768) {
    return (
      <header className={styles.main}>
        <div className={styles.container}>
          <div className={styles.top}>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <Nav></Nav>
            <Link className={styles.comparison} to={"/comparison"}>
              <img src={iconComparison} alt="" />
              <span>Сравнение</span>
            </Link>
          </div>
          <div className={styles.bot}>
            <AddressClient></AddressClient>
            <h5 className={styles.number}>
              <a href="tel:+7999999999">+7 (800) 550–07–92</a>
            </h5>
          </div>
        </div>
      </header>
    );
  } else if (windowWidth <= 768 && windowWidth >= 360) {
    return (
      <header className={styles.main}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <AddressClient></AddressClient>
        <img className={styles.menu} src={menu} alt="" />
      </header>
    );
  } else {
  }
};

export default Header;
