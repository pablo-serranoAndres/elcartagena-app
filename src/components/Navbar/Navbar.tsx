import { RiAccountCircleLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import BurgerIcon from "../icons/BurgerIcon/BurgerIcon";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <BurgerIcon />

      <h2>elcartagena</h2>
      <div className={styles.icons}>
        <RiAccountCircleLine size={30}></RiAccountCircleLine>
        <CiShoppingCart size={30}></CiShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;
