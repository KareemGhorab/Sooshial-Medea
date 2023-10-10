import clsx from 'clsx'

import styles from './nav.module.css'
import Link from 'next/link'
import H1 from '@/components/header/h1'

const Nav: React.FC<{ className?: string }> = ({ className }): JSX.Element => (
	<nav
		className={clsx(
			'flex justify-center items-center py-3 px-20 border-b-2 bg-white border-primary-400',
			styles.nav,
			className
		)}
	>
		<Link href='/'>
			<H1 title='Sooshial Medea' />
		</Link>
	</nav>
)

export default Nav
