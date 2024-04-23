import { useState } from "react";
import styles from "./NavElement.module.css";
import cn from "classnames";

const NavElement = (props) => {
  return (
    <a
      className={cn(styles.main, { [styles.active]: props.state == "active" })}
    >
      {props.children}
    </a>
  );
};

export default NavElement;
