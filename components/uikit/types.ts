import { PropsWithChildren, HTMLAttributes, ElementType } from "react"

type Sizes = 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | 'xxl' | 'xxxl'
type JustifyProp = 'center' | 'left' | 'right' | 'around' | 'between' | 'start' | 'end'
type AlignProp = 'center' | 'start' | 'end' | 'baseline'
export type DirectionProp = 'column' | 'rowReverse' | 'columnReverse' | undefined

export interface BoxProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
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