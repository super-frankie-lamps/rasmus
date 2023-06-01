import { FC, PropsWithChildren } from "react"
import Box from "../Box"

interface SectionProps extends PropsWithChildren {}

const Section: FC<SectionProps> = ({ children, ...props }) => {
  return (
	<Box as="section" {...props}>{children}</Box>
  )
}

export default Section