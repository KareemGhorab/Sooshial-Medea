import H4 from '@/components/header/h4'
import UserImage from '@/components/user/user-image'

type Props = {
	username: string
	image: string
}

const PostHeader: React.FC<Props> = ({ image, username }): JSX.Element => (
	<header className="flex gap-3 items-center">
		<UserImage username={username} image={image} />
		<H4 title={username} />
	</header>
)

export default PostHeader
