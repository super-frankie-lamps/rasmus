import Image from "next/image"
import { FC } from "react"
import angle from "@public/assets/icons/angle.svg"
import angleDark from "@public/assets/icons/angleDark.svg"
import briefcase from "@public/assets/icons/briefcase.svg"
import briefcaseDark from "@public/assets/icons/briefcaseDark.svg"
import contacts from "@public/assets/icons/contacts.svg"
import contactsDark from "@public/assets/icons/contactsDark.svg"
import booking from "@public/assets/icons/booking.svg"
import bookingDark from "@public/assets/icons/bookingDark.svg"

const icons: any = {
	ANGLE: angle,
	ANGLE_DARK: angleDark,
	BRIEFCASE: briefcase,
	BRIEFCASE_DARK: briefcaseDark,
	CONTACTS: contacts,
	CONTACTS_DARK: contactsDark,
	BOOKING: booking,
	BOOKING_DARK: bookingDark
}

interface IconProps {
	name: string
	className?: string
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
	const icon = icons[name]
	return (
		<Image src={icon} alt="" {...props}/>
	)
}

export default Icon