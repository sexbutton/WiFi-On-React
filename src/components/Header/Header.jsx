//ХУКИ, БИБЛИОТЕКИ, МОДУЛИ И Т.Д
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
//КОМПОНЕНТЫ
import AddressClient from "./AddressClient/AddressClient";
import Nav from "./Nav/Nav";
import ComparisonButton from "./Comparison/ComparisonButton";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
//СТАТИКА
import styles from "./Header.module.css";
import logo from "./iconLogo.png";
import iconComparison from "./iconComparison.svg";
import menu from "./iconMenu.svg";

const Header = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [statusHamburgerMenu, setStatusHamburgerMenu] = useState(false);

  const openHamburgerMenu = () => {
    setStatusHamburgerMenu(true);
  };
  const closeHamburgerMenu = () => {
    setStatusHamburgerMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth > 868) {
    return (
      <header className={styles.main}>
        <div className={styles.container}>
          <div className={styles.top}>
            <Link to={"/"}>
              <img className={styles.logo} src={logo} alt="" />
            </Link>
            <Nav></Nav>
            <ComparisonButton></ComparisonButton>
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
  } else if (windowWidth <= 868 && windowWidth >= 420) {
    return (
      <header className={styles.main}>
        <div className={styles.containerTablet}>
          <Link to={"/"}>
            <img className={styles.logo} src={logo} alt="" />
          </Link>
          <AddressClient></AddressClient>
        </div>
        <img
          onClick={openHamburgerMenu}
          className={styles.iconMenu}
          src={menu}
          alt=""
        />
        {statusHamburgerMenu && (
          <HamburgerMenu
            mobile="true"
            isOpen={statusHamburgerMenu}
            onClose={closeHamburgerMenu}
          />
        )}
      </header>
    );
  } else {
    return (
      <header className={styles.main}>
        <Link to={"/"}>
          <img className={styles.logo} src={logo} alt="" />
        </Link>

        <img
          onClick={openHamburgerMenu}
          className={styles.iconMenu}
          src={menu}
          alt=""
        />
        {statusHamburgerMenu && (
          <HamburgerMenu
            mobile="true"
            isOpen={statusHamburgerMenu}
            onClose={closeHamburgerMenu}
          />
        )}
      </header>
    );
  }
};

export default Header;
