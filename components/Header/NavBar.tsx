'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Dispatch, FC, SetStateAction } from "react"
import { Box, Button, ScrollLink } from "@components/uikit"
// import { serviceList } from "@data"
import Menu from "./Menu"
import { useMediaQuery } from "react-responsive"
import { MOBILE_QUERY } from "@constants"
import clsx from "clsx"
import BurgerBtn from "./BurgerBtn"
import styles from './index.module.css'

type SubItem = {
	id: string,
	name: string,
	link: string
}
type MenuItem = {
	name: string,
	img: string,
	component: FC<any>,
	link?: string,
	items?: Array<SubItem>
}
type MenuList = Array<MenuItem>

interface NavBarProps {
	setOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

const NavBar: FC<NavBarProps> = ({ setOpen, isOpen }) => {
	const pathname = usePathname();
	const isHome = pathname === '/';
	const menuList: MenuList = [
		// {
		// 	name: 'Vores Ydelser',
		// 	img: 'BRIEFCASE',
		// 	component: Button,
		// 	items: serviceList
		// },
		{
			name: 'Book møde',
			img: 'BOOKING',
			component: isHome ? ScrollLink : Link,
			link: '#calendly'
		},
		{
			name: 'Contacts',
			img: 'CONTACTS',
			component: ScrollLink,
			link: '#footer'
		}
	]
	const isMobile = useMediaQuery(MOBILE_QUERY)
	const classes = clsx([
		styles.menu,
		isOpen ? styles.active : styles.inactive
	])

	return (	
		<>
			{isMobile && (
				<BurgerBtn setOpen={setOpen} isOpen={isOpen}/>
			)}
			<Box as="ul" align="center" className={classes}>
				<Menu menuList={menuList} hideNavbar={() => setOpen(false)} />
			</Box>
		</>
	)
}

export default NavBar