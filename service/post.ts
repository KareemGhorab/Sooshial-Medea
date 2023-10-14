import { TPost } from '@/types/post/app'
import { mapToPost } from '@/types/post/map'
import { dummyPosts } from './dummy'

export const getFeed = async (
	page: number,
	username: string
): Promise<TPost[]> => {
	return Promise.resolve(dummyPosts.map((p) => mapToPost(p)))
}

export const postPost = async (content: string, images: string[]) => {
	return Promise.resolve()
}

export const toggleLikePost = async (postId: string) => {
	return Promise.resolve()
}
