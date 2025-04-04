import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <h1>elcartagenadelevante</h1>
    </div>
  );
}
