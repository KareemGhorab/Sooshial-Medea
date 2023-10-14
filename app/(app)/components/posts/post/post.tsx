import clsx from 'clsx'
import Card from '@/components/ui/card/card'
import { TPost } from '@/types/post/app'
import PostHeader from './post-header'
import PostBody from './post-body'
import PostFooter from './post-footer'

type Props = {
	post: TPost
	className?: string
}

const Post: React.FC<Props> = ({
	post: {
		content,
		id,
		authorUsername,
		authorImage,
		commentsCount,
		likesCount,
		publishedAt,
		images,
	},
	className,
}): JSX.Element => (
	<li className={clsx('w-full', className)}>
		<article>
			<Card className='w-full flex flex-col gap-5'>
				<PostHeader username={authorUsername} image={authorImage} />
				<PostBody images={images} content={content} />
				<PostFooter
					commentsCount={commentsCount}
					likesCount={likesCount}
					date={publishedAt}
				/>
			</Card>
		</article>
	</li>
)

export default Post
