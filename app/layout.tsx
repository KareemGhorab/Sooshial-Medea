import type { Metadata } from 'next'
import { Neucha } from 'next/font/google'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import clsx from 'clsx'

export const metadata: Metadata = {
	title: 'Sooshial Medea',
	description: "Sooshial Medea is a childish Social Media App, that's it",
}

const neucha = Neucha({ weight: ['400'], subsets: ['cyrillic'] })

const RootLayout: React.FC<React.PropsWithChildren> = ({
	children,
}): JSX.Element => (
	<html lang='en'>
		<body>
			<div className={clsx(neucha.className, 'text-primary-400')}>
				{children}
			</div>
		</body>
	</html>
)

export default RootLayout
