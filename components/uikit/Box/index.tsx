import clsx from 'clsx'
import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './index.module.css'

type Sizes = 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl'
type JustifyProp = 'center' | 'left' | 'right' | 'around' | 'between' | 'start' | 'end'
type AlignProp = 'center' | 'start' | 'end' | 'baseline'
type DirectionProp = 'column' | 'rowReverse' | 'columnReverse' | undefined
type InlineStyles = {
	flexDirection: DirectionProp,
	padding?: number | string,
	marginTop?: number | '' | undefined,
	marginBottom?: number | '' | undefined,
	marginRight?: number | '' | undefined,
	marginLeft?: number | '' | undefined
}

interface BoxProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	className?: string
	as?: ElementType
	justify?: JustifyProp
	align?: AlignProp
	wrap?: boolean
	direction?: DirectionProp
	bottom?: Sizes
	top?: Sizes
	right?: Sizes
	left?: Sizes
	padding?: string
}

type SizesValue = {
	[key: string]: number
}

const sizesValue: SizesValue = {
	xs: 4,
	s: 8,
	sm: 16,
	ml: 24,
	l: 32,
	xl: 48,
	xxl: 64,
	xxxl: 128
  };

const Box: FC<BoxProps> = ({ as: Tag = 'div', className = '', children, justify, align, wrap, direction, bottom, top, right, left, padding, ...props }) => {
	const classes = clsx([
		styles.box,
		className,
		justify && styles[`justify_${justify}`],
		align && styles[`align_${align}`],
		wrap && styles.wrap
	])

	const inlineStyles: InlineStyles = {
		flexDirection: direction,
		marginTop: top && sizesValue[top],
		marginBottom: bottom && sizesValue[bottom],
		marginLeft: left && sizesValue[left],
		marginRight: right && sizesValue[right],
	}

	if (padding) {
		if (!padding.includes(' ')) {
		  inlineStyles.padding = sizesValue[padding];
		} else {
		  inlineStyles.padding = padding.split(' ').reduce((acc, s) => {
			const value = sizesValue[s] ? `${sizesValue[s]}px ` : '0 ';
			return acc + value;
		  }, '');
		}
	  }

	return (
		<Tag style={inlineStyles} className={classes} {...props}>{children}</Tag>
	)
}

export default Box