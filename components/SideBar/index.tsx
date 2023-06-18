"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AText, Box } from "@components/uikit"
import { serviceList } from "@data"
import styles from './index.module.css'

const SideBar = () => {
	const pathname = usePathname();
	return (
		<Box top="xxxl" className={styles.sideBar} left="xl" padding="xl" direction="column">
			<AText font="medium" size="xl">Other Services:</AText>
			<Box as="ul" top="xl" direction="column" className={styles.list}>
				{serviceList.map(({ id, link, name }) => {
					const isActive = pathname.startsWith(`/${link}`)
					return (
						<AText as="li" size="l" key={id} font={isActive ? 'medium' : undefined}><Link href={link}>{name}</Link></AText>
					)}
				)}
			</Box>
		</Box>
	)
}

export default SideBar