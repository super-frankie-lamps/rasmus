import clsx from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./index.module.css"

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({children, className, ...props}) => {
   const classes = clsx([
		styles.btn,
		className
   ])
   return (
      <button type="button" className={classes} {...props}>{children}</button>
      )
}
export default Button;
