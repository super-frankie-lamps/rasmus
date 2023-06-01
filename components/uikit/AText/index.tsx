import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './index.module.css'

type TxtColor = '-color1' | '-color2' | '-color3' | '-color4'
type Sizes = 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl'
type Font = 'medium' | 'semiBold' | 'bold'

interface ATextProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	className?: string
	as?: ElementType
  color?: TxtColor
  size?: Sizes
  font?: Font
}

const AText: FC<ATextProps> = ({ as: Tag = 'div', color, size, className, font, children, ...props }) => {
  const classes = clsx([
    className,
    size && styles[`f_${size}`]
  ])

  const inlineStyles = {
    color: `var(--txt${color})`
  }

  return (
	  <Tag className={classes} style={inlineStyles} {...props}>{children}</Tag>
  )
}

export default AText