import Footer from '@components/Footer'
import '@styles/globals.css'
import { FC, PropsWithChildren } from 'react'

export const metadata = {
	title: 'Legal Office ApS',
	description: 'Legal Office ApS: providing legal services relating to business and company law, including investment and financing rounds, incentive and employee stock programmes, commercial contracts, corporate restructurings.'
}

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
	<html lang='da'>
		<body>
			<main className="app">
				{children}
				<Footer/>
			</main>
		</body>
	</html>
  )
}

export default RootLayout