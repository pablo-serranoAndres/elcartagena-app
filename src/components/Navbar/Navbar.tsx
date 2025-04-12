import { RiAccountCircleLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { FeaturedText } from "../FeaturedText";
import BurgerIcon from "../icons/BurgerIcon/BurgerIcon";
import styles from "./Navbar.module.scss";
import { Select } from "../Select";

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
          <CiShoppingCart fill="black" size={30}></CiShoppingCart>
        </div>
      </div>
    </>
  );
};

export default Navbar;
