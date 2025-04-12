import { RiAccountCircleLine } from "react-icons/ri";
import { FeaturedText } from "../FeaturedText";
import BurgerIcon from "../icons/BurgerIcon/BurgerIcon";
import styles from "./Navbar.module.scss";
import { Select } from "../Select";
import CartIcon from "../icons/CartIcon/CartIcon";

const Navbar = () => {
  return (
    <>
      <FeaturedText text={"Chapurrear!"} />

      <div className={styles.container}>
        <div className={styles.menu}>
          <BurgerIcon />
          <Select variant="lang" />
        </div>
        <h2>elcartagena</h2>
        <div className={styles.icons}>
          <RiAccountCircleLine fill="black" size={30}></RiAccountCircleLine>
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
