import Link from "next/link"
import { FC, PropsWithChildren } from "react"
import { CustomAnchorProps } from "../types"
import styles from './index.module.css'

interface CustomLinkProps extends PropsWithChildren, CustomAnchorProps {}

const CustomLink: FC<CustomLinkProps> = ({ children, ...props }) => {
  return (
	<Link className={styles.link} {...props}>{children}</Link>
  )
}

export default CustomLink