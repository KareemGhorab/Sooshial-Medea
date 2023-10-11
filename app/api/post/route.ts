import { getFeed } from '@/service/server/post'

export async function GET(request: Request) {
	const { page = 1, userId } = await request.json()
	if (!userId) throw new Error('User ID required')

	const data = await getFeed(userId, page)

	return Response.json(data)
}
