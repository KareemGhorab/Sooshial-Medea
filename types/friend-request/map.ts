import { TFriendRequestResponse } from './api.d'
import { TFriendRequest } from './app.d'

export const mapToFriendRequest = ({
	id,
	receiver_username,
	sender_username,
}: TFriendRequestResponse): TFriendRequest => ({
	id,
	receiverUsername: receiver_username,
	senderUsername: sender_username,
})
