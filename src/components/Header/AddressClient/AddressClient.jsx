import iconVectorWhite from "./iconVectorWhite.svg";
import iconVectorBlack from "./iconVectorBlack.svg";
import cn from "classnames";
import styles from "./AddressClient.module.css";

const AddressClient = (props) => {
  const { mobile } = props;

  return (
    <div
      className={cn(styles.main, {
        [styles.colorMobile]: mobile,
        [styles.colorDesk]: !mobile,
      })}
    >
      {mobile ? (
        <img className="" src={iconVectorBlack} alt="" />
      ) : (
        <img className="" src={iconVectorWhite} alt="" />
      )}
      <span className={styles.address}>
        Адрес клиента длинный какой то пиздец
      </span>
    </div>
  );
};

export default AddressClient;
