import iconComparisonWhite from "./iconComparisonWhite.svg";
import iconComparisonBlack from "./iconComparisonBlack.svg";
import styles from "./ComparisonButton.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";

const ComparisonButton = (props) => {
  const { mobile } = props;

  return (
    <Link
      className={cn(styles.main, {
        [styles.colorMobile]: mobile === "true",
        [styles.colorDesk]: mobile !== "true",
      })}
      to={"/comparison"}
    >
      {mobile === "true" ? (
        <img src={iconComparisonBlack} alt="" />
      ) : (
        <img src={iconComparisonWhite} alt="" />
      )}
      <span>Сравнение</span>
    </Link>
  );
};

export default ComparisonButton;
