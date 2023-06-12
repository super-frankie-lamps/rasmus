import { FC } from "react"
import { AText, Box, CustomLink} from "@components/uikit"
import NavBar from "./NavBar"
import styles from "./index.module.css"

const Header: FC = () => {
  return (
	<Box as="header" justify="between" bottom="xxxl">
		<AText font="semiBold" size="l" color="-color2">
			<CustomLink href="/" className={styles.logo}>Rasmus Albrechtsen</CustomLink>
		</AText>
		<NavBar />
	</Box>
  )
}

export default Header