import { RiAccountCircleLine } from "react-icons/ri";
import { FeaturedText } from "../FeaturedText";
import BurgerIcon from "../icons/BurgerIcon/BurgerIcon";
import styles from "./Navbar.module.scss";
import { Select } from "../Select";
import Image from "next/image";
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
        <Image
          src={"/images/logo.png"}
          alt={""}
          height={80}
          width={252}
        ></Image>
        <div className={styles.icons}>
          <RiAccountCircleLine fill="black" size={30}></RiAccountCircleLine>
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
