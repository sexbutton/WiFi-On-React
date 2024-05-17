import styles from "./HelpForm.module.css";
import cn from "classnames";
import helpDesk from "./imgs/helpDesk.png";
import { useEffect, useState } from "react";
import Input from "../Input/Input";

const HelpForm = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (windowWidth > 1280) {
    return (
      <div className={styles.main}>
        <div className={styles.containerForm}>
          <h2>Нужна помощь в выборе тарифа?</h2>
          <p className={styles.desc}>
            Оставьте свои контактные данные в форме ниже и наши менеджеры
            свяжутся с вами, чтобы подробно проконсультировать вас о тарифах
            и провайдерах вашего города
          </p>
          <div className={styles.inputs}>
            <Input placeholder="Ваше имя"></Input>
            <Input placeholder="Ваш телефон" typeInput="phone"></Input>
            <Input placeholder="Адрес подключения" typeInput="address"></Input>
          </div>
          <div className={styles.sendAndText}>
            <button>Отправить</button>
            <p>
              Нажимая кнопку «Отправить» вы соглашаетесь с 
              <span> Политикой конфиденциальности</span>
            </p>
          </div>
        </div>
        <img src={helpDesk} alt="" />
      </div>
    );
  } else if (windowWidth < 1280 && windowWidth > 680) {
    return (
      <div className={styles.mainTablet}>
        <h2>Нужна помощь в выборе тарифа?</h2>
        <p className={styles.descTablet}>
          Оставьте свои контактные данные в форме ниже и наши менеджеры свяжутся
          с вами, чтобы подробно проконсультировать вас о тарифах и провайдерах
          вашего города
        </p>
        <div className={styles.containerFormTablet}>
          <div className={styles.inputsTablet}>
            <Input placeholder="Ваше имя"></Input>
            <Input placeholder="Ваш телефон" typeInput="phone"></Input>
            <Input placeholder="Адрес подключения" typeInput="address"></Input>
          </div>
          <img src={helpDesk} alt="" />
        </div>
        <div className={styles.sendAndImgTablet}>
          <button>Отправить</button>
          <p>
            Нажимая кнопку «Отправить» вы соглашаетесь с 
            <span> Политикой конфиденциальности</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.mainMobile}>
        <h2>Нужна помощь в выборе тарифа?</h2>
        <p className={styles.descMobile}>
          Оставьте свои контактные данные в форме ниже и наши менеджеры свяжутся
          с вами, чтобы подробно проконсультировать вас о тарифах и провайдерах
          вашего города
        </p>
        <div className={styles.inputsMobile}>
          <Input placeholder="Ваше имя"></Input>
          <Input placeholder="Ваш телефон" typeInput="phone"></Input>
          <Input placeholder="Адрес подключения" typeInput="address"></Input>
        </div>
        <div className={styles.sendAndTextMobile}>
          <button>Отправить</button>
          <p>
            Нажимая кнопку «Отправить» вы соглашаетесь с 
            <span> Политикой конфиденциальности</span>
          </p>
        </div>
        <img src={helpDesk} alt="" />
      </div>
    );
  }
};

export default HelpForm;
