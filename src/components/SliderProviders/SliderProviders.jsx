import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProvider from "./CardProvider/CardProvider";
import styles from "./SliderProviders.module.css";
import domruIcon from "./imgs/domruIcon.png";

const SliderProviders = ({ providers = [] }) => {
  return (
    <div className={styles.main}>
      <h2>Доступные провайдеры</h2>
      <div className={styles.wrapperCards}>
        <CardProvider img={domruIcon} />
        <CardProvider img={domruIcon} />
        <CardProvider img={domruIcon} />
      </div>
    </div>
  );
};

export default SliderProviders;
