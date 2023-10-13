import { getFeed } from '@/service/server/post'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const page = request.nextUrl.searchParams.get('page') ?? 1
	const userId = request.nextUrl.searchParams.get('userId')
	const correctPage: number = +page < 1 ? 1 : +page

	console.log({ page, userId })

	if (!userId) throw new Error('User ID required')

	const data = await getFeed(userId, correctPage)

	return Response.json({ posts: data })
}
