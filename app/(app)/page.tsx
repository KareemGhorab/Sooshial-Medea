'use client'

import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { PiSpinnerGapThin } from 'react-icons/pi'

import { TPost } from '@/types/app'
import { getAllPosts } from '@/service/client/post'
import { toastOptions } from '@/utils/toast'

import PostList from './posts/post-list'
import { useSession } from 'next-auth/react'

const Feed: React.FC = (): JSX.Element => {
	const [posts, setPosts] = useState<TPost[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [pageNumber, setPageNumber] = useState<number>(1)
	const { data } = useSession()

	console.log({ data })

	useEffect(() => {
		setLoading(true)
		getAllPosts(pageNumber, data?.user?.email ?? null)
			.then(({ data }) => setPosts((op) => [...op, ...data.posts]))
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
