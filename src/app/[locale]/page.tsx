"use client";

import { useTranslations } from "next-intl";
import { Link, redirect } from "../../i18n/navigation";
import "@/styles/globals.scss";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
