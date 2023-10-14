'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { PiPushPinFill } from 'react-icons/pi'

import styles from './post.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

type Props = {
	images?: string[]
	content: string
}

const PostBody: React.FC<Props> = ({ images, content }): JSX.Element => (
	<main className='flex flex-col gap-3'>
		{images ? (
			<Carousel showStatus={false}>
				{images.map((image) => (
					<div className='w-full h-72 relative' key={image}>
						<PiPushPinFill className='absolute w-20 h-20 right-0 text-primary-400' />
						<Image
							className={clsx(
								'w-full h-full rounded',
								styles['post__body__image']
							)}
							src={image}
							alt={image}
							width={500}
							height={288}
							unoptimized
						/>
					</div>
				))}
			</Carousel>
		) : null}
		<p>{content}</p>
	</main>
)

export default PostBody
