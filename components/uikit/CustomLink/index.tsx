"use client"
import Link, { LinkProps } from "next/link"
import { AnchorHTMLAttributes, FC, MouseEventHandler, PropsWithChildren } from "react";

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;

interface CustomLinkProps extends PropsWithChildren, LinkProps, AnchorProps {}

const CustomLink: FC<CustomLinkProps> = ({children, ...props}) => {
   const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.href.replace(/.*\#/, "")
      const elem = document.getElementById(targetId)
      window.scrollTo({
         top: elem?.getBoundingClientRect().top,
         behavior: "smooth",
       });
    }
   return (
      <Link onClick={handleClick} {...props}>{children}</Link>
   )
}

export default CustomLink