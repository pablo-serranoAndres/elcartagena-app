import FeaturedTextProps from "./Featured.types";
import styles from "./FeaturedText.module.scss";

const FeaturedText = ({ text }: FeaturedTextProps) => {
  return (
    <div className={styles.featured_container}>
      <span className={styles.featured_text}>{text.toLocaleUpperCase()}</span>
    </div>
  );
};

export default FeaturedText;
