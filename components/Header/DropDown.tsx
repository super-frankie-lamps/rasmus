import { FC } from "react"
import { AText, Box, CustomLink } from "@components/uikit"
import styles from "./index.module.css"
import clsx from "clsx"

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
      {list.map(({ name, link }) => {
        return (
          <Box as="li">
            <AText color="-color4" align="left" className={styles.dropdownItem}>
              <CustomLink href={link}>{name}</CustomLink>
            </AText>
          </Box>
        )
      })}
    </Box>
  )
}

export default DropDown