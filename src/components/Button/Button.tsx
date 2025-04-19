import ButtonProps from "./Button.types";
import classNames from "classnames";
import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({
  variant,
  size,
  href,
  // animation,
  position,
  upper,
  marginAuto,
  color,
  target = "_self",
  children,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(
    styles.button,
    styles[`button-${position}`],
    styles[`button-${variant}`],
    styles[`button-${color}`],
    styles[`button-${size}`]
  );

  const render = () => {
    if (typeof children === "string") {
      return upper ? children.toUpperCase() : children;
    }
    return children;
  };

  return href ? (
    <Link href={href} className={buttonClass} target={target}>
      <span>{render()}</span>
    </Link>
  ) : (
    <button className={buttonClass} {...props}>
      <span>{render()}</span>
    </button>
  );
};

export { Button };
