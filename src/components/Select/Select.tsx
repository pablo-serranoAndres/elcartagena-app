"use client";

import { redirect } from "../../i18n/navigation";
import { useLocale } from "next-intl";
import SelectProps from "./Select.types";
import styles from "./Select.module.scss";

const Select = ({ variant, options = [] }: SelectProps) => {
  switch (variant) {
    case "lang":
      const locale = useLocale();

      const handleSwitchLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = e.target.value;

        redirect({ href: "/", locale: selectedLocale });
      };

      return (
        <select
          className={styles.select}
          value={locale || locale}
          onChange={handleSwitchLang}
        >
          {" "}
          <option value={"es"}>ES</option>
          <option value={"en"}>EN</option>
        </select>
      );
    case "regular":
      return (
        <select className={styles.select}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      );
  }
};
export { Select };
