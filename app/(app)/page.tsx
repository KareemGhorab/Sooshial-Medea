'use client'

import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { PiSpinnerGapThin } from 'react-icons/pi'

import { TPost } from '@/types/app'
import { getPosts } from '@/service/post'
import { toastOptions } from '@/utils/toast'

import PostList from './posts/post-list'

const Feed: React.FC = (): JSX.Element => {
	const [posts, setPosts] = useState<TPost[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [pageNumber, setPageNumber] = useState<number>(1)

	useEffect(() => {
		setLoading(true)
		getPosts(pageNumber, '')
			.then((data) => setPosts((op) => [...op, ...data]))
			.catch((err: AxiosError) => {
				if (err.response?.status === 404) return
				toast.error(err?.message, toastOptions)
			})
			.finally(() => setLoading(false))
	}, [])

	console.log(posts)

	return (
		<section className='flex justify-center px-10 pb-10'>
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
