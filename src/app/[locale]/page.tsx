"use client";
import "@/styles/globals.scss";
import { useTranslations } from "next-intl";
import { Button } from "@/components";
import Image from "next/image";
import styles from "./page.module.scss";

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
          <Button
            variant={"filled"}
            size={"compact-xs"}
            marginAuto={true}
            onClick={() => alert("Try to find your father!")}
            upper
            children="The founds"
            color={"pink"}
          />
        </div>

        <div className={styles.images_crafts}>
          <Image
            src="/images/crafts.png"
            alt="Crafts"
            width={1024}
            height={1536}
            quality={100}
          />
          <Button
            variant={"filled"}
            size={"compact-xs"}
            marginAuto={true}
            upper
            onClick={() => alert("Try to craft you a gf incel!")}
            href="https://www.w3schools.com/tags/att_a_target.asp"
            position="absolute"
            children="The crafts"
            color={"black"}
          />
        </div>
      </section>
    </div>
  );
}
