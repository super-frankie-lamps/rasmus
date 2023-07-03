import { FC, PropsWithChildren } from 'react'
import { Box } from '@components/uikit'
import styles from './index.module.css'

interface ContainerProps extends PropsWithChildren {}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
	  <Box className={styles.container} {...props}>{children}</Box>
  )
}

export default Container