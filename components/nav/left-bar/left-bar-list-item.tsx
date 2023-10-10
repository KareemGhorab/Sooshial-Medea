import Link from 'next/link'

export type LeftBarListItemProps = {
	children: React.ReactNode
	label: string
	url: string
}

const LeftBarListItem: React.FC<LeftBarListItemProps> = ({
	children,
	label,
	url,
}): JSX.Element => (
	<li className='text-2xl'>
		<Link href={url} className='flex justify-center items-center gap-2'>
			{children}
			<div className='hidden lg:block'>{label}</div>
		</Link>
	</li>
)

export default LeftBarListItem
