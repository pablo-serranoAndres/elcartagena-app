import Image from "next/image";
import { Select } from "@/components";
import { BurgerIcon, CartIcon } from "@/components/icons";
import { RiAccountCircleLine } from "react-icons/ri";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
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

export { Navbar };
