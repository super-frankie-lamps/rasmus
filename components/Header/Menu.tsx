"use client"
import { FC, MouseEventHandler, useEffect, useState } from "react"
import clsx from "clsx"
import { AText, Icon } from "@components/uikit"
import DropDown from "./DropDown"
import { useOutsideClick } from "@components/hooks"
import { useMediaQuery } from "react-responsive"
import { MOBILE_QUERY } from "@constants"
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

interface MenuProps {
	menuList: MenuList
	hideNavbar: () => void
}

const Menu: FC<MenuProps> = ({ menuList, hideNavbar }) => {
	const isMobile = useMediaQuery(MOBILE_QUERY)
	const [isNavbarHidden, setNavbarHidden] = useState<boolean>(false)
	const [isOpen, setOpen] = useState<boolean>(false)
	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		setOpen(!isOpen)
	}

	const handleHideNavbar: MouseEventHandler<HTMLAnchorElement> = (event) => {
		if (isMobile) {
			setNavbarHidden(true)
		}
		event.preventDefault()
		const [fragment] = event.currentTarget.href.split('/').slice(-1)
		const targetId = fragment.replace('#', '')
		const elem = document.getElementById(targetId)
		const top = (elem?.getBoundingClientRect().top || 0) + window.scrollY
		window.scrollTo({
		   top,
		   behavior: "smooth",
		 });
	}

	useEffect(() => {
		if (isNavbarHidden) {
			const id = setTimeout(() => {
				hideNavbar()
				setNavbarHidden(false)
			}, 1000);
            return () => clearTimeout(id);
		}
	}, [isNavbarHidden])

	const ref = useOutsideClick(() => setOpen(false));

	const caretClasses = clsx([
		styles.caret,
		isOpen && styles.up
	]);

	return (
		<>
			{menuList.map(({ component: Comp, img, name, link, items = [] }) => {
				const compProps = link ? { href: link, onClick: handleHideNavbar } : { onClick: handleClick, ref } 
				return (
					<AText as="li" color={isMobile ? '-color1' : '-color2'} size={isMobile? 'l' : 'm'} className={styles.item} key={name}>
						<Comp {...compProps}>
							<Icon name={isMobile ? `${img}_DARK` : img} />{name} {Boolean(items.length) && <Icon className={caretClasses} name={isMobile ? 'ANGLE_DARK' : 'ANGLE'} />}
						</Comp>
						{Boolean(items.length) && (
							<DropDown list={items} isActive={isOpen} />
						)}
					</AText>
				)
			})}
		</>
	)
}

export default Menu