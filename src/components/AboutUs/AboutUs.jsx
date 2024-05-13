import styles from "./AboutUs.module.css";
import calendarImg from "./img/iconCalendar.svg";
import groupImg from "./img/iconGroup.svg";
import mapImg from "./img/iconMap.svg";
import cn from "classnames";

const AboutUs = (props) => {
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
      <div className={styles.imgAndFacts}>
        <div className={styles.block}>
          <img src={calendarImg} alt="" />
        </div>
        <div className={cn(styles.block, styles.block2)}>
          <h2>10 лет</h2>
          <p>сотрудничаем с ведущими интернет — провайдерами страны</p>
        </div>
        <div className={styles.block}>
          <img src={mapImg} alt="" />
        </div>
        <div className={cn(styles.block, styles.block4)}>
          <h2>31452</h2>
          <p>подключённых клиентов через наш сервис</p>
        </div>
        <div className={styles.block}>
          <img src={groupImg} alt="" />
        </div>
        <div className={cn(styles.block, styles.block6)}>
          <h2>89</h2>
          <p>регионов, в которых мы подключаем Интернет и ТВ</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
