import { TComment } from '@/types/comment/app'
import { mapToComment } from '@/types/comment/map'
import { dummyComments } from './dummy'

export const getComments = async (postId: string): Promise<TComment[]> => {
	return Promise.resolve(dummyComments.map((c) => mapToComment(c)))
}

export const addComment = async (postId: string, content: string) => {
	return Promise.resolve()
}

export const toggleLikeComment = async (commentId: string) => {
	return Promise.resolve()
}
