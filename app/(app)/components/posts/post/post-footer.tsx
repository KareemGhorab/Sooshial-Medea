'use client'

import { TComment } from '@/types/comment/app'
import { useState } from 'react'

type Props = {
	commentsCount: number
	likesCount: number
	date: string
}

const PostFooter: React.FC<Props> = ({
	commentsCount,
	date,
	likesCount,
}): JSX.Element => {
	const [comments, setComments] = useState<TComment[]>([])
	const [pageNumber, setPageNumber] = useState<number>(1)

	return (
		<footer className='flex gap-5 px-5'>
			<div>{likesCount} likes</div>
			<div>{commentsCount} comments</div>
			<div className='ml-auto'>{date}</div>
		</footer>
	)
}
export default PostFooter
