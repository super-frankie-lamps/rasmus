import clsx from 'clsx'
import { FC } from 'react'
import { BoxProps, DirectionProp } from '../types'
import styles from './index.module.css'

type InlineStyles = {
	flexDirection: DirectionProp,
	padding?: number | string,
	marginTop?: number | '' | undefined,
	marginBottom?: number | '' | undefined,
	marginRight?: number | '' | undefined,
	marginLeft?: number | '' | undefined
}

type SizesValue = {
	[key: string]: number
}

const sizesValue: SizesValue = {
	xs: 4,
	s: 8,
	m: 16,
	ms: 20,
	l: 30,
	xl: 40,
	xxl: 80,
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