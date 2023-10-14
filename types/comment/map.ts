import { TComment } from './app'
import { TCommentResponse } from './api'

export const mapToComment = ({
	author_image,
	author_username,
	content,
	id,
	likes_count,
	published_at,
}: TCommentResponse): TComment => ({
	authorImage: author_image,
	authorUsername: author_username,
	content,
	id,
	likesCount: likes_count,
	publishedAt: published_at,
})
