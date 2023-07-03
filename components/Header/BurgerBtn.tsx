import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react"
import { Box, Button } from "@components/uikit"
import styles from './index.module.css'
import clsx from "clsx"

interface BurgerBtnProps {
	setOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

const BurgerBtn: FC<BurgerBtnProps> = ({ setOpen, isOpen }) => {
	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		setOpen(!isOpen)
	}

	return (
		<Button onClick={handleClick} className={styles.burger}>
			<Box className={styles.icon}/>
		</Button>
	)
}

export default BurgerBtn