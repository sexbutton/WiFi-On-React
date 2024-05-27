import styles from "./CardProvider.module.css";
import { useState } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import {
  addProvider,
  removeProvider,
} from "../../../redux/actions/providerAction";

const CardProvider = ({ img, id }) => {
  const [on, setOn] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (on) {
      setOn(false);
      dispatch(removeProvider(id));
    } else {
      setOn(true);
      dispatch(addProvider(id));
    }
  };

  return (
    <div onClick={handleClick} className={cn(styles.main, { [styles.on]: on })}>
      <div className={styles.wrapper}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CardProvider;
