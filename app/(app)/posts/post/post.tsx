import clsx from 'clsx'
import { TPost } from '@/types/app'
import Card from '@/components/ui/card/card'
import PostHeader from './post-header'
import PostBody from './post-body'

type Props = {
	post: TPost
	className?: string
}

const Post: React.FC<Props> = ({
	post: { content, id, author, picture },
	className,
}): JSX.Element => (
	<li className={clsx('w-full', className)}>
		<article>
			<Card className='w-full flex flex-col gap-5'>
				<PostHeader author={author} />
				<PostBody image={picture} content={content} />
			</Card>
		</article>
	</li>
)

export default Post
