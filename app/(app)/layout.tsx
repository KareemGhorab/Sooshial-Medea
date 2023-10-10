import Nav from '@/components/nav/navbar/nav'
import RightBar from '@/components/nav/right-bar/right-bar'
import LeftBar from '@/components/nav/left-bar/left-bar'
import Image from 'next/image'

const AppLayout: React.FC<React.PropsWithChildren> = ({
	children,
}): JSX.Element => (
	<div>
		<div className='fixed z-50 inset-0 md:grid md:grid-cols-[minmax(0,_1fr),_minmax(0,_3fr),_minmax(0,_1fr)] md:grid-rows-[100px,_minmax(0,_1fr)]'>
			<Nav className='col-start-2 col-span-1' />
			<LeftBar className='col-start-1' />
			<RightBar className='col-start-3' />
		</div>
		<div className='pt-32 w-3/5 mx-auto'>{children}</div>
	</div>
)

export default AppLayout
