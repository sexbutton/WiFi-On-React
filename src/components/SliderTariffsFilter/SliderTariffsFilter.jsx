import React from "react";
import styles from "./SliderTariffsFilter.module.css";
import CardTariff from "../CardTariff/CardTariff";
import arrowLeft from "./imgs/arrowLeft.svg";
import arrowRight from "./imgs/arrowRight.svg";

function SliderTariffsFilter({ tariffs }) {
  if (tariffs) {
    return (
      <div className={styles.main}>
        <div className={styles.sliderContainer}>
          {tariffs.map((tariff) => (
            <CardTariff key={tariff.id} tariff={tariff} />
          ))}
        </div>
        <div className={styles.buttons}>
          <img src={arrowLeft} alt="" />
          <img src={arrowRight} alt="" />
        </div>
      </div>
    );
  }
}

export default SliderTariffsFilter;
