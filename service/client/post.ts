import { TPost } from '@/types/app'
import { apiClient } from './api-client'

export const getAllPosts = async () => {
	return apiClient.get<TPost[]>('/api/post')
}
