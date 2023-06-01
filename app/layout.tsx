import '@styles/globals.css'
import { FC, PropsWithChildren } from 'react'

export const metadata = {
	title: 'Rasmus',
	description: ''
}

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
	<html lang='da'>
		<body>
			<main className="app">
				{children}
			</main>
		</body>
	</html>
  )
}

export default RootLayout