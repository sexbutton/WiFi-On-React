import styles from "./Nav.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const Nav = (props) => {
  const { mobile } = props;
  const [currentPage, setCurrentPage] = useState("");

  const handleClick = (page, event) => {
    setCurrentPage(page);
    event.preventDefault();
  };

  return (
    <div
      className={cn(styles.main, { [styles.mobileMain]: mobile === "true" })}
    >
      <Link
        to={"/#aboutUs"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "aboutUs",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("aboutUs", e)}
      >
        О нас
      </Link>
      <Link
        to={"/#providers"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "providers",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("providers", e)}
      >
        Провайдеры
      </Link>
      <Link
        to={"/tariffs"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "tariffs",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("tariffs", e)}
      >
        Тарифы
      </Link>
      <Link
        to={"/#help"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "help",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("help", e)}
      >
        Помощь
      </Link>
      <Link
        to={"/#faq"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "faq",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("faq", e)}
      >
        Ответы на вопросы
      </Link>
      <Link
        to={"/contacts"}
        className={cn(styles.navElement, {
          [styles.active]: currentPage === "contacts",
          [styles.colorMobile]: mobile,
          [styles.colorDesk]: !mobile,
        })}
        onClick={(e) => handleClick("contacts", e)}
      >
        Контакты
      </Link>
    </div>
  );
};

export default Nav;
