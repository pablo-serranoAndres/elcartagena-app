interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "filled" | "transparent";
  children: React.ReactNode;
  color: "pink" | "black";
  size:
    | "compact-xs"
    | "compact-sm"
    | "compact-md"
    | "compact-lg"
    | "compact-xl";
  href?: string;
  target?: "_blank" | "_self" | "_parent	" | "_top" | "framename	";
  upper?: boolean;
  // animation?: "fade-in" | "fade-out";
  position?: "absolute" | "relative";
  marginAuto?: boolean;
}
export default ButtonProps;
