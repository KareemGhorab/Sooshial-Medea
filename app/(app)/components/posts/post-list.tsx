import clsx from 'clsx'
import { TPost } from '@/types/post/app'
import Post from './post/post'

type Props = {
	posts: TPost[]
	className?: string
}

const PostList: React.FC<Props> = ({ posts, className }): JSX.Element => (
	<ul className={clsx('flex flex-col gap-10 w-full', className)}>
		{posts.map((post) => (
			<Post post={post} key={post.id} />
		))}
	</ul>
)

export default PostList
