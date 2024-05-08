import styles from "./CardTypeConnect.module.css";
import iconInternet from "./iconInternet.png";
import iconInternetTV from "./iconInternettv.png";
import iconTV from "./iconTV.png";
import iconConnection from "./iconConnection.png";
import cn from "classnames";

const CardTypeConnect = (props) => {
  const { device, type } = props;

  switch (type) {
    case "Internet+TV":
      return (
        <div
          className={cn(styles.main, {
            [styles.mainTablet]: device === "tablet",
          })}
        >
          <div
            className={cn(styles.wrapperImg, {
              [styles.wrapperImgTablet]: device === "tablet",
            })}
          >
            <img src={iconInternetTV} alt="" />
          </div>

          <h4>Интернет+ТВ</h4>
        </div>
      );
    case "Internet":
      return (
        <div
          className={cn(styles.main, {
            [styles.mainTablet]: device === "tablet",
          })}
        >
          <div
            className={cn(styles.wrapperImg, {
              [styles.wrapperImgTablet]: device === "tablet",
            })}
          >
            <img src={iconInternet} alt="" />
          </div>

          <h4>Домашний интернет</h4>
        </div>
      );
    case "TV":
      return (
        <div
          className={cn(styles.main, {
            [styles.mainTablet]: device === "tablet",
          })}
        >
          <div
            className={cn(styles.wrapperImg, {
              [styles.wrapperImgTablet]: device === "tablet",
            })}
          >
            <img src={iconTV} alt="" />
          </div>

          <h4>Телевидение</h4>
        </div>
      );
    case "Internet+Connection+TV":
      return (
        <div
          className={cn(styles.main, {
            [styles.mainTablet]: device === "tablet",
          })}
        >
          <div
            className={cn(styles.wrapperImg, {
              [styles.wrapperImgTablet]: device === "tablet",
            })}
          >
            <img src={iconConnection} alt="" />
          </div>
          <h4>Связь+Интернет+ТВ</h4>
        </div>
      );
  }
};

export default CardTypeConnect;
