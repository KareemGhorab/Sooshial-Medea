'use client'

import Nav from '@/components/nav/navbar/nav'
import RightBar from '@/components/nav/right-bar/right-bar'
import LeftBar from '@/components/nav/left-bar/left-bar'
import { useState } from 'react'
import { MenusState } from '@/components/nav/menus-state'
import clsx from 'clsx'

const AppLayout: React.FC<React.PropsWithChildren> = ({
	children,
}): JSX.Element => {
	const [menusState, setMenusState] = useState<MenusState>(MenusState.NONE)
	return (
		<>
			<Nav
				className='md:h-[120px] md:w-3/5 w-full fixed z-50 md:-translate-x-1/2 md:left-1/2'
				menusState={menusState}
				setMenusState={setMenusState}
			/>
			<LeftBar
				className={clsx(
					'md:w-1/5 w-40 md:top-[118px] top-[45px] min-h-screen transition-transform duration-100 fixed',
					{
						'-translate-x-40 md:translate-x-0':
							menusState !== MenusState.LEFT,
					}
				)}
			/>
			<RightBar
				className={clsx(
					'fixed right-0 md:w-1/5 md:top-[120px] top-[45px] w-40 min-h-screen transition-transform duration-100',
					{
						'translate-x-40 md:translate-x-0':
							menusState !== MenusState.RIGHT,
					}
				)}
			/>
			<div className='pt-24 md:pt-40 mx-auto md:w-3/5'>
				<div className='w-full max-w-[600px] mx-auto'>{children}</div>
			</div>
		</>
	)
}

export default AppLayout
