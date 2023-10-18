'use client'

import { TPost } from '@/types/post/app'
import { toastOptions } from '@/utils/toast'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import PostList from './post-list'
import Loading from '@/components/ui/loading'

type Props = {
	fetchPosts: (pageNumber: number) => Promise<TPost[]>
}

const PostSection: React.FC<Props> = ({ fetchPosts }): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true)
	const [posts, setPosts] = useState<TPost[]>([])
	const [pageNumber, setPageNumber] = useState<number>(1)

	useEffect(() => {
		setLoading(true)
		fetchPosts(1)
			.then((data: TPost[]) =>
				pageNumber === 1
					? setPosts(data)
					: setPosts((op) => [...op, ...data])
			)
			.catch((err: AxiosError) => {
				if (err.response?.status === 404) return
				toast.error(err?.message, toastOptions)
			})
			.finally(() => setLoading(false))
	}, [pageNumber, fetchPosts])

	return (
		<section className='flex justify-center md:px-6 pb-10'>
			<ToastContainer />
			{posts.length ? (
				<PostList posts={posts} />
			) : loading ? (
				<Loading />
			) : (
				<p className='text-2xl'>No Posts to show</p>
			)}
		</section>
	)
}

export default PostSection
