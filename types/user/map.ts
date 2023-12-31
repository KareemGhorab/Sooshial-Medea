import { TUser } from './app'
import { TUserResponse } from './api'

export const mapToUser = ({
	bio,
	friends_count,
	image,
	username,
}: TUserResponse): TUser => ({
	bio,
	friendsCount: friends_count,
	image,
	username,
})
