'use client'

import clsx from 'clsx'
import { PiListThin } from 'react-icons/pi'

import styles from './nav.module.css'
import Link from 'next/link'
import H1 from '@/components/header/h1'
import Button from '@/components/button/button'
import { MenusState } from '../menus-state'

type Props = {
	className?: string
	menusState: MenusState
	setMenusState: any
}

const Nav: React.FC<Props> = ({
	className,
	menusState,
	setMenusState,
}): JSX.Element => {
	return (
		<nav
			className={clsx(
				'flex md:justify-center justify-between items-center py-3 md:px-20 px-5 border-b-2 bg-white border-primary-400',
				styles.nav,
				className
			)}
		>
			<Link href='/' className='hidden md:block'>
				<H1 title='Sooshial Medea' />
			</Link>
			<Button
				rounded
				className='md:hidden'
				onClick={() =>
					setMenusState((prev: MenusState) =>
						prev === MenusState.LEFT
							? MenusState.NONE
							: MenusState.LEFT
					)
				}
			>
				<PiListThin></PiListThin>
			</Button>
			<Button
				rounded
				className='md:hidden'
				onClick={() =>
					setMenusState((prev: MenusState) =>
						prev === MenusState.RIGHT
							? MenusState.NONE
							: MenusState.RIGHT
					)
				}
			>
				<PiListThin></PiListThin>
			</Button>
		</nav>
	)
}

export default Nav
