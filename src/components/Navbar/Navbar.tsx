import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <FaHamburger size={30}></FaHamburger>
        <select>
          <option>ES</option>
          <option>BRIT</option>
        </select>
      </div>
      <h2>elcartagena</h2>
      {/* <Image src={""} alt={""} height={80} width={80}></Image> */}
      <div className={styles.icons}>
        <RiAccountCircleLine size={30}></RiAccountCircleLine>
        <CiShoppingCart size={30}></CiShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;
