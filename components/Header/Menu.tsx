"use client"
import Image from "next/image"
import { FC, MouseEventHandler, useState } from "react"
import clsx from "clsx"
import { AText, Icon } from "@components/uikit"
import angle from "@public/assets/icons/angle.svg"
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
}

const Menu: FC<MenuProps> = ({ menuList }) => {
	const isMobile = useMediaQuery(MOBILE_QUERY)
	const [isOpen, setOpen] = useState<boolean>(false)
	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		setOpen(!isOpen)
	}

	const ref = useOutsideClick(() => setOpen(false));

	const caretClasses = clsx([
		styles.caret,
		isOpen && styles.up
	]);

	return (
		<>
			{menuList.map(({ component: Comp, img, name, link, items = [] }) => {
				const compProps = link ? { href: link } : { onClick: handleClick, ref } 
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