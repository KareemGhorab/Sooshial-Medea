import { Post } from '@prisma/client'
import { TPost } from './app'

export const mapPost = (
	data: Post & { author: { name: string } }
): TPost => ({
	content: data.content,
	id: data.id,
	author: {
		id: data.authorId,
		name: data.author.name,
	},
})
