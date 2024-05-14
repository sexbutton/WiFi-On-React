import { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";
import calendarImg from "./img/iconCalendar.svg";
import groupImg from "./img/iconGroup.svg";
import mapImg from "./img/iconMap.svg";
import cn from "classnames";

const AboutUs = (props) => {
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
  if (windowWidth < 768) {
    return (
      <div className={styles.mobileMain}>
        <div className={styles.mobileText}>
          <h2>О нас</h2>
          <p>
            Мы являемся официальным партнёром крупных федеральных и региональных
            интернет-провайдеров. На нашем сайте вы можете ознакомится со всеми
            актуальными предложениями по подключению домашнего интернета
            и телевидения в вашем городе.
          </p>
        </div>
        <table>
          <tr>
            <td className={styles.mobileBlock}>
              <img src={calendarImg} alt="" />
              <div className={styles.blockText}>
                <h2>10 лет</h2>
                <p>сотрудничаем с ведущими интернет — провайдерами страны</p>
              </div>
            </td>
            <td className={cn(styles.mobileBlock, styles.mobileBlock2)}>
              <img src={groupImg} alt="" />
              <div className={styles.blockText}>
                <h2>31452</h2>
                <p>подключённых клиентов через наш сервис</p>
              </div>
            </td>
            <td className={styles.mobileBlock}>
              <img src={mapImg} alt="" />
              <div className={styles.blockText}>
                <h2>89</h2>
                <p>регионов, в которых мы подключаем Интернет и ТВ</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.text}>
          <h2>О нас</h2>
          <p>
            Мы являемся официальным партнёром крупных федеральных и региональных
            интернет-провайдеров. На нашем сайте вы можете ознакомится со всеми
            актуальными предложениями по подключению домашнего интернета
            и телевидения в вашем городе.
          </p>
        </div>
        <table>
          <tr>
            <td className={cn(styles.block, styles.block1)}>
              <img src={calendarImg} alt="" />
            </td>
            <td className={styles.block}>
              <h2>10 лет</h2>
              <p>сотрудничаем с ведущими интернет — провайдерами страны</p>
            </td>
            <td className={cn(styles.block, styles.block3)}>
              <img src={mapImg} alt="" />
            </td>
          </tr>
          <tr>
            <td className={cn(styles.block, styles.block4)}>
              <h2>31452</h2>
              <p>подключённых клиентов через наш сервис</p>
            </td>
            <td className={styles.block}>
              <img src={groupImg} alt="" />
            </td>
            <td className={cn(styles.block, styles.block6)}>
              <h2>89</h2>
              <p>регионов, в которых мы подключаем Интернет и ТВ</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default AboutUs;
