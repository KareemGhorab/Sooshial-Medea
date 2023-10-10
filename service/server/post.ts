import { prisma } from '@/prisma/db'
import { TPost } from '@/types/app'
import { mapPost } from '@/types/map'
import { UserRelationship } from '@prisma/client'

const LIMIT = 10

export const getFeed = async (
	userId: string,
	page: number = 1
): Promise<TPost[]> => {
	const user = await prisma.user.findUnique({
		where: { id: userId },
		include: {
			outgoingRelations: {
				take: LIMIT,
				skip: (page - 1) * LIMIT,
				include: {
					toUser: {
						include: {
							posts: {
								include: {
									author: {
										select: { name: true },
									},
								},
							},
						},
					},
				},
			},
		},
	})

	if (!user) {
		throw new Error('User not found')
	}

	const serverPosts = user.outgoingRelations.flatMap(
		(relation) => relation.toUser.posts
	)

	const posts: TPost[] = serverPosts.map((p) => mapPost(p))

	return posts
}

export const addPost = async (
	content: string,
	authorId: string,
	picture?: string
) => {
	return await prisma.post.create({
		data: {
			content,
			authorId,
			picture,
			publishedAt: new Date(),
		},
	})
}

export const addRelation = async (
	fromUserId: string,
	toUserId: string,
	relationship: UserRelationship
) => {
	const fromUser = await prisma.user.findUnique({
		where: {
			id: fromUserId,
		},
		include: {
			incomingRelations: true,
			outgoingRelations: true,
		},
	})

	const toUser = await prisma.user.findUnique({
		where: {
			id: toUserId,
		},
		include: {
			incomingRelations: true,
			outgoingRelations: true,
		},
	})

	if (!fromUser || !toUser) throw new Error("One or both users don't exist")

	const relation = await prisma.userRelation.create({
		data: {
			relationship,
			fromUserId,
			toUserId,
		},
	})

	await prisma.user.update({
		where: { id: fromUserId },
		data: {
			outgoingRelations: {
				connect: { fromUserId_toUserId: relation },
			},
		},
	})

	await prisma.user.update({
		where: { id: toUserId },
		data: {
			incomingRelations: {
				connect: { fromUserId_toUserId: relation },
			},
		},
	})
}

