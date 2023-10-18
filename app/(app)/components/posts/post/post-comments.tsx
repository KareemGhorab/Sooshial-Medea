import { getComments } from '@/service/comment'
import { TComment } from '@/types/comment/app'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

type Props = {
	postId: string
	className?: string
}

const PostComments: React.FC<Props> = ({ postId, className }): JSX.Element => {
	const [comments, setComments] = useState<TComment[]>([])
	const [pageNumber, setPageNumber] = useState<number>(1)

	useEffect(() => {
		getComments(postId).then((data) =>
			pageNumber === 1
				? setComments(data)
				: setComments((oc) => [...oc, ...data])
		)
	}, [postId, pageNumber])

	return <section className={clsx('', className)}></section>
}

export default PostComments
