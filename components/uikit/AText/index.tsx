import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './index.module.css'

type TxtColor = '-color1' | '-color2' | '-color3' | '-color4'
type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'| 'xxxxl'
type Font = 'medium' | 'semiBold' | 'bold'
type TxtAlign = 'center'| 'left'

interface ATextProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	className?: string
	as?: ElementType
  color?: TxtColor
  size?: Sizes
  font?: Font
  align?: TxtAlign
}

const AText: FC<ATextProps> = ({ as: Tag = 'div', color = '-color4', size, className, font, children, align, ...props }) => {
  const classes = clsx([
    styles.text,
    className,
    size && styles[`f_${size}`],
    font && styles[`font_${font}`],
    align && styles[`align_${align}`]
  ])

  const inlineStyles = {
    color: `var(--b-txt${color})`
  }

  return (
	  <Tag className={classes} style={inlineStyles} {...props}>{children}</Tag>
  )
}

export default AText