import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProvider from "./CardProvider/CardProvider";
import cn from "classnames";
import styles from "./SliderProviders.module.css";
import ArrowLeft from "./ArrowLeft.svg";
import ArrowRight from "./ArrowRight.svg";
import domruIcon from "./imgs/domruIcon.png";

const SliderProviders = () => {
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
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  if (windowWidth > 1250) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.main}>
        <h2>Провайдеры в вашем доме</h2>
        <h4>Доступно 5 провайдеров</h4>
        <div className={styles.containerSlider}>
          <img
            src={ArrowLeft}
            onClick={previous}
            className={styles.arrowLeft}
            alt=""
          />
          <div className={styles.slider}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
            </Slider>
          </div>
          <img
            src={ArrowRight}
            onClick={next}
            alt=""
            className={styles.arrowRight}
          />
        </div>
      </div>
    );
  } else if (windowWidth <= 1250 && windowWidth >= 700) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.main}>
        <h2>Провайдеры в вашем доме</h2>
        <h4>Доступно 5 провайдеров</h4>
        <div className={styles.containerSlider}>
          <img
            src={ArrowLeft}
            onClick={previous}
            className={styles.arrowLeft}
            alt=""
          />
          <div className={styles.sliderTablet}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
            </Slider>
          </div>
          <img
            src={ArrowRight}
            onClick={next}
            alt=""
            className={styles.arrowRight}
          />
        </div>
      </div>
    );
  } else if (windowWidth < 700) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.main}>
        <h2>Провайдеры в вашем доме</h2>
        <h4>Доступно 5 провайдеров</h4>
        <div className={styles.containerSlider}>
          <div className={styles.sliderMobile}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
              <div>
                <CardProvider img={domruIcon}></CardProvider>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
};

export default SliderProviders;
