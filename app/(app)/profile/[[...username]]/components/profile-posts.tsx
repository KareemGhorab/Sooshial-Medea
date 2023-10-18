'use client'

import { useCallback } from 'react'
import { getPosts } from '@/service/post'
import PostSection from '@/app/(app)/components/posts/post-section'

type Props = {
	username: string
}

const ProfilePosts: React.FC<Props> = ({ username }): JSX.Element => {
	const fetchPosts = useCallback(
		async (pageNumber: number) => {
			return getPosts(pageNumber, username)
		},
		[username]
	)

	return <PostSection fetchPosts={fetchPosts} />
}

export default ProfilePosts
