import { TCommentResponse } from '@/types/comment/api'
import { TFriendRequestResponse } from '@/types/friend-request/api'
import { TPostResponse } from '@/types/post/api'
import { TUserResponse } from '@/types/user/api'

export const dummyPosts: TPostResponse[] = [
	{
		author_image: 'https://placehold.co/400x400',
		author_username: 'Kareem Ghorab',
		comments_count: 5,
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'pst-1',
		likes_count: 625,
		published_at: '10/14/2023',
		images: [
			'https://placehold.co/400x400',
			'https://placehold.co/500x500',
			'https://placehold.co/600x600',
		],
	},
]

export const dummyUser: TUserResponse = {
	bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	friends_count: 1000,
	image: 'https://placehold.co/600x600',
	username: 'Kareem Ghorab',
}

export const dummyComments: TCommentResponse[] = [
	{
		author_image: 'https://placehold.co/600x400',
		author_username: 'Kareem Ghorab',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'cmt-1',
		likes_count: 10,
		published_at: '10/14/2023',
	},
	{
		author_image: 'https://placehold.co/600x400',
		author_username: 'Kareem Ghorab',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'cmt-2',
		likes_count: 10,
		published_at: '10/14/2023',
	},
	{
		author_image: 'https://placehold.co/600x400',
		author_username: 'Kareem Ghorab',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'cmt-3',
		likes_count: 10,
		published_at: '10/14/2023',
	},
	{
		author_image: 'https://placehold.co/600x400',
		author_username: 'Kareem Ghorab',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'cmt-4',
		likes_count: 10,
		published_at: '10/14/2023',
	},
	{
		author_image: 'https://placehold.co/600x400',
		author_username: 'Kareem Ghorab',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		id: 'cmt-5',
		likes_count: 10,
		published_at: '10/14/2023',
	},
]

export const dummyFriendRequests: TFriendRequestResponse[] = [
	{
		id: 'frq-1',
		receiver_username: 'Kareem Ghorab',
		sender_username: 'Someone Someone',
	},
	{
		id: 'frq-2',
		receiver_username: 'Kareem Ghorab',
		sender_username: 'Someone Someone 2',
	},
	{
		id: 'frq-3',
		receiver_username: 'Kareem Ghorab',
		sender_username: 'Someone Someone 3',
	},
	{
		id: 'frq-4',
		receiver_username: 'Kareem Ghorab',
		sender_username: 'Someone Someone 4',
	},
]
