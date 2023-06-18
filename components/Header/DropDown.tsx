import Image from "next/image"
import { FC } from "react"
import clsx from "clsx"
import { AText, Box, CustomLink } from "@components/uikit"
import arrow from "@public/assets/icons/arrow.svg"
import styles from "./index.module.css"

interface DropDownProps {
  list: Array<any>,
  isActive: boolean
}

const DropDown: FC<DropDownProps> = ({ list, isActive }) => {
  const classes = clsx([
    styles.dropdown,
    isActive ? styles.active : styles.inactive
  ])
  return (
    <Box as="ul" direction="column" className={classes}>
      {list.map(({ id, name, link }) => {
        return (
          <Box as="li" key={id}>
            <AText color="-color4" align="left" className={styles.dropdownItem}>
              <CustomLink href={link}>{name}<Image src={arrow} alt="" /></CustomLink>
            </AText>
          </Box>
        )
      })}
    </Box>
  )
}

export default DropDown