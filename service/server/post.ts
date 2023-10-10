import { prisma } from '@/prisma/db'
import { TPost } from '@/types/app'
import { mapPost } from '@/types/map'

export const getAllPosts = async (): Promise<TPost[]> => {
	const serverPosts = await prisma.post.findMany({
		include: {
			author: {
				select: { name: true },
			},
		},
	})

	const posts: TPost[] = serverPosts.map((p) => mapPost(p))

	return posts
}

export const addPost = async (content: string, authorId: string) => {
	return await prisma.post.create({
		data: {
			content,
			authorId,
		},
	})
}
