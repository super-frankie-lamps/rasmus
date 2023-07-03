import clsx from "clsx";
import { ButtonHTMLAttributes, ForwardRefRenderFunction, PropsWithChildren, forwardRef } from "react";
import styles from "./index.module.css"

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: ForwardRefRenderFunction<HTMLButtonElement,ButtonProps> = ({children, className, ...props}, ref) => {
   const classes = clsx([
		styles.btn,
		className
   ])
   return (
      <button ref={ref} type="button" className={classes} {...props}>{children}</button>
   )
}
export default forwardRef(Button);
