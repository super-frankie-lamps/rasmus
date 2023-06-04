import { FC, PropsWithChildren } from "react"
import Box from "../Box"
import { BoxProps } from "../types"

interface SectionProps extends BoxProps {}

const Section: FC<SectionProps> = ({ children, ...props }) => {
  return (
	<Box as="section" {...props}>{children}</Box>
  )
}

export default Section