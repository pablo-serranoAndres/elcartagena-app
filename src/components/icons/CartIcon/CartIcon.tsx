import { GiShoppingBag } from "react-icons/gi";
import styles from "./CartIcon.module.scss";

const CartIcon = () => {
  return (
    <div className={styles.container}>
      <GiShoppingBag
        className={styles.icon}
        textAnchor="black"
        fill="black"
        size={35}
      />
      <div className={styles.circle}>
        <span>5</span>
      </div>
    </div>
  );
};

export { CartIcon };
