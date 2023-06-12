"use client"
import { FC, MouseEventHandler, PropsWithChildren } from "react";
import CustomLink from "../CustomLink";
import { CustomAnchorProps } from "../types";

interface ScrollLinkProps extends PropsWithChildren, CustomAnchorProps {}

const ScrollLink: FC<ScrollLinkProps> = ({children, ...props}) => {
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
      <CustomLink onClick={handleClick} {...props}>{children}</CustomLink>
   )
}

export default ScrollLink