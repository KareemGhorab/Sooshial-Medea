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
		<div>
			<div className='fixed inset-0 z-50 flex flex-wrap justify-between md:grid md:grid-cols-[minmax(0,_1fr),_minmax(0,_3fr),_minmax(0,_1fr)] md:grid-rows-[100px,_minmax(0,_1fr)]'>
				<Nav
					className='md:col-start-2 col-span-1 w-full'
					menusState={menusState}
					setMenusState={setMenusState}
				/>
				<LeftBar
					className={clsx(
						'md:col-start-1 md:w-full w-40 h-full transition-transform duration-100',
						{
							'-translate-x-40 md:translate-x-0':
								menusState !== MenusState.LEFT,
						}
					)}
				/>
				<RightBar
					className={clsx(
						'md:col-start-3 md:w-full w-40 h-full transition-transform duration-100',
						{
							'translate-x-40 md:translate-x-0':
								menusState !== MenusState.RIGHT,
						}
					)}
				/>
			</div>
			<div className='pt-32 w-3/5 mx-auto'>{children}</div>
		</div>
	)
}

export default AppLayout
