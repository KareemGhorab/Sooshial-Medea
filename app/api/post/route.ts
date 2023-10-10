import { getAllPosts } from '@/service/server/post'

export async function GET(request: Request) {
	const data = await getAllPosts()
	return Response.json(data)
}
