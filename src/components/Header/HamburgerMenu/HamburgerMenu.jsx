import iconCross from "./iconCross.svg";
import styles from "./HamburgerMenu.module.css";
import Nav from "../Nav/Nav";
import ComparisonButton from "../Comparison/ComparisonButton";
import iconLogo from "../iconLogo.png";
import { Link } from "react-router-dom";
import AddressClient from "../AddressClient/AddressClient";
import cn from "classnames";

const HamburgerMenu = (props) => {
  const { isOpen, onClose, mobile } = props;
  return (
    <div className={styles.main}>
      <div className={styles.logoAndCross}>
        <Link>
          <img src={iconLogo} alt="" />
        </Link>
        <img
          className={styles.cross}
          onClick={onClose}
          src={iconCross}
          alt=""
        />
      </div>
      <Nav mobile="true"></Nav>
      <ComparisonButton mobile={mobile}></ComparisonButton>
      <a className={styles.number} href="tel:+78005500792">
        +7 (800) 550-07-92
      </a>
      <AddressClient mobile="true"></AddressClient>
    </div>
  );
};

export default HamburgerMenu;
