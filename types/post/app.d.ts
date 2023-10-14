export type TPost = {
	id: string
	content: string
	images?: string[]
	authorUsername: string
	authorImage: string
	likesCount: number
	commentsCount: number
	publishedAt: string
}
