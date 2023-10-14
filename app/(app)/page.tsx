'use client'

import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { PiSpinnerGapThin } from 'react-icons/pi'

import { toastOptions } from '@/utils/toast'
import { getFeed } from '@/service/post'
import { TPost } from '@/types/post/app'
import PostList from './components/posts/post-list'

const Feed: React.FC = (): JSX.Element => {
	const [posts, setPosts] = useState<TPost[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [pageNumber, setPageNumber] = useState<number>(1)

	useEffect(() => {
		setLoading(true)
		getFeed(1, '')
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
	}, [pageNumber])

	return (
		<section className='flex justify-center px-2 md:px-6 pb-10'>
			<ToastContainer />
			{posts.length ? (
				<PostList posts={posts} />
			) : loading ? (
				<PiSpinnerGapThin size={100} className='animate-spin' />
			) : (
				<p className='text-2xl'>No Posts to show</p>
			)}
		</section>
	)
}

export default Feed
