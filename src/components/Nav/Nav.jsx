import styles from "./Nav.module.css";
import cn from "classnames";

const Nav = (props) => {
  return <nav className={styles.container}>{props.children}</nav>;
};

export default Nav;
