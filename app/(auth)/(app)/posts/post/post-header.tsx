import H4 from '@/components/header/h4'
import { TUser } from '@/types/app'

type Props = {
	author: TUser
}

const PostHeader: React.FC<Props> = ({ author: { id, name } }): JSX.Element => (
	<header className='flex gap-2 items-center'>
		<H4 title={name} />
	</header>
)

export default PostHeader
