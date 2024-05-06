import iconVector from "./iconVector.svg";

import styles from "./AddressClient.module.css";

const AddressClient = (props) => {
  return (
    <div className={styles.main}>
      <img src={iconVector} alt="" />
      <span className={styles.address}>
        Адрес клиента длинный какой то пиздец
      </span>
    </div>
  );
};

export default AddressClient;
