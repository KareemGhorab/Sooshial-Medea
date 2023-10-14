import { TFriendRequest } from '@/types/friend-request/app'
import { mapToFriendRequest } from '@/types/friend-request/map'
import { dummyFriendRequests } from './dummy'

export const getFriendRequests = async (): Promise<TFriendRequest[]> => {
	return Promise.resolve(
		dummyFriendRequests.map((fr) => mapToFriendRequest(fr))
	)
}

export const toggleFriendRequest = async (receiver_username: string) => {
	return Promise.resolve()
}
