import clsx from 'clsx'
import Image from 'next/image'
import { PiPushPinFill } from 'react-icons/pi'
import { TImage } from '@/types/app'

import styles from './post.module.css'

type Props = {
	image?: TImage
	content: string
}

const PostBody: React.FC<Props> = ({ image, content }): JSX.Element => (
	<main className='flex flex-col gap-3'>
		{image ? (
			<div className='w-full h-72 relative'>
				<PiPushPinFill className='absolute w-20 h-20 -top-10 right-0 text-primary-400' />
				<Image
					className={clsx(
						'w-full h-full rounded',
						styles['post__body__image']
					)}
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			</div>
		) : null}
		<p>{content}</p>
	</main>
)

export default PostBody
