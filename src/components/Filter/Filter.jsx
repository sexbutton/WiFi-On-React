import Checkbox from "./Checkbox/Checkbox";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.main}>
      <Checkbox label="Тарифы"></Checkbox>
      <Checkbox label="Провидеры"></Checkbox>
      <Checkbox label="О нас"></Checkbox>
      <Checkbox label="Контакты"></Checkbox>
    </div>
  );
};

export default Filter;
