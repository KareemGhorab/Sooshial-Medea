export type TPostResponse = {
	id: string
	content: string
	images?: string[]
	author_username: string
	author_image: string
	likes_count: number
	comments_count: number
	published_at: string
}
