import clsx from 'clsx'

import styles from './nav.module.css'

const Nav: React.FC<{ className?: string }> = ({ className }): JSX.Element => (
	<nav
		className={clsx(
			'flex py-3 px-20 border-b-2 bg-white border-primary-400',
			styles.nav,
			className
		)}
	></nav>
)

export default Nav
