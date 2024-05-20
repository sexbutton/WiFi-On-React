import styles from "./CardProvider.module.css";
const CardProvider = ({ img }) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CardProvider;
