'use client'
import { FC, useState } from "react"
import { AText, Box, CustomLink} from "@components/uikit"
import NavBar from "./NavBar"
import { useMediaQuery } from "react-responsive"
import { MOBILE_QUERY } from "@constants"
import styles from "./index.module.css"
import clsx from "clsx"

const Header: FC = () => {
	const isMobile = useMediaQuery(MOBILE_QUERY)
	const [isOpen, setOpen] = useState<boolean>(false)
	const navbar = clsx([
		styles.nav,
		isOpen && styles.open
	]);

	return (
		<Box as="header" justify="between" bottom={isMobile ? 'xxl': 'xxxl'} className={clsx([styles.header])}>
			<Box as="nav" className={navbar}>
				<AText font="semiBold" size="l" color="-color2">
					<CustomLink href="/" className={styles.logo}>Legal Office ApS</CustomLink>
				</AText>
				<NavBar isOpen={isOpen} setOpen={setOpen} />
			</Box>
		</Box>
	)
}

export default Header