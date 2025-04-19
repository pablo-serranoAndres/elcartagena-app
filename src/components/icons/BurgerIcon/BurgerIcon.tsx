"use client";

import { useState } from "react";
import styles from "./BurgerIcon.module.scss";
const BurgerIcon = () => {
  const [open, setOpen] = useState(false);

  const toggleBread = () => {
    setOpen(!open);
  };

  return (
    <svg
      className={styles.burger}
      viewBox="0 0 34.432751 38.38427"
      version="1.1"
      width={50}
      height={50}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => toggleBread()}
    >
      <defs />
      <g transform="translate(-68.940565,-79.476995)">
        <path
          className={styles[`bottom_bread_${open}`]}
          d="m 86.249662,79.477009 c -2.647924,0.0013 -5.332127,0.147175 -7.819871,0.45311 -5.500504,0.676436 -8.048546,1.658227 -8.493423,2.673174 h -0.06544 v 0.242495 c -0.0066,0.05808 -0.0066,0.116212 0,0.17432 v 5.298709 h 32.491792 v -4.959503 c 0.11153,-0.249459 0.11563,-0.50103 0,-0.750409 v -0.0056 h -0.003 c -0.19092,-0.40529 -0.69668,-0.804575 -1.59114,-1.178566 l -0.0502,-0.02066 C 97.724624,80.171132 92.075094,79.47411 86.249662,79.477009 Z"
        />

        <g
          className={`${styles.bottom_patty} ${styles[`bottom_patty_${open}`]}`}
        >
          <rect
            width="34.331081"
            height="6.065104"
            x="69.003716"
            y="89.737648"
            rx="3"
            ry="3.032552"
          />
        </g>

        <g className={`${styles.upper_patty} ${styles[`upper_patty_${open}`]}`}>
          <rect
            width="34.331081"
            height="6.065104"
            x="69.003716"
            y="97.380806"
            rx="3"
            ry="3.032552"
          />
        </g>

        <g className={`${styles.upper_bread} ${styles[`upper_bread_${open}`]}`}>
          <path d="m 102.29968,110.5978 a 16.240686,9.7108574 0 0 1 -8.120339,8.40985 16.240686,9.7108574 0 0 1 -16.240687,0 16.240686,9.7108574 0 0 1 -8.120342,-8.40985" />
          <rect
            width="32.481606"
            height="4.308362"
            x="69.81662"
            y="107.17027"
            ry="1.1280724"
          />
        </g>
      </g>
    </svg>
  );
};

export { BurgerIcon };
