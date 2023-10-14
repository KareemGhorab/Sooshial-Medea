import H4 from '@/components/header/h4'
import Image from 'next/image'

type Props = {
	username: string
	image: string
}

const PostHeader: React.FC<Props> = ({ image, username }): JSX.Element => (
	<header className='flex gap-3 items-center'>
		<div className='rounded-full overflow-hidden h-12 w-12'>
			<Image
				className='h-full w-full'
				src={image}
				alt={username}
				width={20}
				height={20}
				unoptimized
			/>
		</div>
		<H4 title={username} />
	</header>
)

export default PostHeader
