"use client"
import Image from "next/image"
import { FC, MouseEventHandler, useState } from "react"
import { AText, Box, Button, ScrollLink } from "@components/uikit"
import briefcase from "@public/assets/icons/briefcase.svg"
import contacts from "@public/assets/icons/contacts.svg"
import booking from "@public/assets/icons/booking.svg"
import angle from "@public/assets/icons/angle.svg"
import DropDown from "./DropDown"
import { useOutsideClick } from "@components/hooks"
import clsx from "clsx"
import styles from './index.module.css'

type SubItem = {
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

const menuList: MenuList = [
	{
		name: 'Vores Ydelser',
		img: briefcase,
		component: Button,
		items: [
			{
				name: 'Luk ApS',
				link: ''
			},
			{
				name: 'Luk A/S',
				link: ''
			},
			{
				name: 'Luk EMV',
				link: ''
			},
			{
				name: 'Luk I/S',
				link: ''
			},
			{
				name: 'Luk K/S',
				link: ''
			}
		]
	},
	{
		name: 'Book møde',
		img: booking,
		component: ScrollLink,
		link: '#calendly'
	},
	{
		name: 'Contacts',
		img: contacts,
		component: ScrollLink,
		link: '#footer'
	}
]

const NavBar = () => {
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
		<Box as="nav">
			<Box as="ul" align="center">
				{menuList.map(({ component: Comp, img, name, link, items = [] }) => {
					const compProps = link ? { href: link } : { onClick: handleClick, ref } 
					return (
						<AText as="li" color="-color2" size="m" className={styles.item} key={name}>
							<Comp {...compProps}>
								<Image src={img} alt=""/>{name} {Boolean(items.length) && <Image className={caretClasses} src={angle} alt="" />}
							</Comp>
							{Boolean(items.length) && (
								<DropDown list={items} isActive={isOpen} />
							)}
						</AText>
					)
				})}
			</Box>
		</Box>
	)
}

export default NavBar