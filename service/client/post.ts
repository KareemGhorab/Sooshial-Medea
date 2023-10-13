import { TPost } from '@/types/app'
import { apiClient } from './api-client'

export const getAllPosts = async (page: number, email: string | null) => {
	if (!email) throw new Error('User email is missing')
	return apiClient.get<{ posts: TPost[] }>(`/api/post`, {
		params: {
			page,
			email,
		},
	})
}
