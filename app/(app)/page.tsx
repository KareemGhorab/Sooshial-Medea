
import { getFeed } from '@/service/post'
import PostSection from './components/posts/post-section'
import { TPost } from '@/types/post/app'

const fetchPosts = async (pageNumber: number): Promise<TPost[]> => {
	'use server'
	return getFeed(pageNumber)
}

const Feed: React.FC = (): JSX.Element => <PostSection fetchPosts={fetchPosts} />

export default Feed
