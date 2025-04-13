"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import "@/styles/globals.scss";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className={styles.home_container}>
      <section className={styles.images}>
        <div className={styles.images_founds}>
          <Image
            src="/images/founds.png"
            alt="Founds"
            width={1024}
            height={1536}
            quality={100}
          />
          <button>Boton</button>
        </div>

        <div className={styles.images_crafts}>
          <Image
            src="/images/founds.png"
            alt="Founds"
            width={1024}
            height={1536}
            quality={100}
          />
        </div>
      </section>
    </div>
  );
}
