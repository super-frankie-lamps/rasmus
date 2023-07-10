"use client"
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { Button } from "@components/uikit"
import styles from './index.module.css'

const BookMeetingBtn = () => {
	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		const targetId = 'calendly';
		const elem = document.getElementById(targetId)
		const top = (elem?.getBoundingClientRect().top || 0) + window.scrollY
		window.scrollTo({
		   top,
		   behavior: "smooth",
		 });
	}

	const router = useRouter();
	const handleRedirect: MouseEventHandler<HTMLButtonElement> = (event) => {
	event.preventDefault();
	router.push('/#calendly');
	}

	const pathname = usePathname();
	const isHome = pathname === '/';
	const handleScroll = isHome ? handleClick : handleRedirect;

	return (
		<Button onClick={handleScroll} className={styles.btn}><i className={styles.btnIcon}/>Book the meeting</Button>
	)
}

export default BookMeetingBtn