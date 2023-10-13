import {
	PiHouseLineThin,
	PiUserThin,
	PiBellThin,
	PiChatThin,
	PiPaperPlaneTiltThin,
} from 'react-icons/pi'
import LeftBarListItem, { LeftBarListItemProps } from './left-bar-list-item'

const list: LeftBarListItemProps[] = [
	{
		children: <PiHouseLineThin />,
		label: 'Home Page',
		url: '/',
	},
	{
		children: <PiUserThin />,
		label: 'Profile',
		url: '/profile',
	},
	{
		children: <PiBellThin />,
		label: 'Notifications',
		url: '/notifications',
	},
	{
		children: <PiPaperPlaneTiltThin />,
		label: 'New Post',
		url: '/new-post',
	},
	{
		children: <PiChatThin />,
		label: 'Chat',
		url: '/chat',
	},
]

const LeftBarList: React.FC = (): JSX.Element => (
	<ul className='flex flex-col items-center pl-0 lg:items-start lg:pl-[4vw] w-full pt-12 gap-10'>
		{list.map((li) => (
			<LeftBarListItem key={li.label} {...li} />
		))}
	</ul>
)

export default LeftBarList
