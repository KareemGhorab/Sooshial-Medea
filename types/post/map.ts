import { TPostResponse } from './api'
import { TPost } from './app'

export const mapToPost = ({
	author_image,
	author_username,
	comments_count,
	content,
	id,
	likes_count,
	published_at,
	images,
}: TPostResponse): TPost => ({
	authorImage: author_image,
	authorUsername: author_username,
	commentsCount: comments_count,
	content,
	id,
	likesCount: likes_count,
	publishedAt: published_at,
	images,
})
