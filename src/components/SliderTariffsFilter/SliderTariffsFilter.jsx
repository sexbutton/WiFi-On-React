import React from "react";
import styles from "./SliderTariffsFilter.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import CardTariff from "../CardTariff/CardTariff";
import "./SliderTariffsFilter.module.css";
import arrowLeft from "./imgs/arrowLeft.svg";
import arrowRight from "./imgs/arrowRight.svg";

function SliderTariffsFilter() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 3,
  };
  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
          <div className={styles.card}>
            <CardTariff />
          </div>
        </Slider>
      </div>
      <div className={styles.buttons}>
        <img onClick={previous} src={arrowLeft} alt="" />
        <img onClick={next} src={arrowRight} alt="" />
      </div>
    </div>
  );
}

export default SliderTariffsFilter;
