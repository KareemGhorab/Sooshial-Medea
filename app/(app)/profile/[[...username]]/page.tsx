import Image from 'next/image'
import { getUser, whoami } from '@/service/user'
import ProfilePosts from './components/profile-posts'
import H2 from '@/components/header/h2'

type Props = {
	params: { username: string[] }
}

const Profile: React.FC<Props> = async ({
	params: { username },
}): Promise<JSX.Element> => {
	const me = await whoami()
	const { bio, friendsCount, image } = await getUser(username?.[0])

	return (
		<main className='flex flex-col items-center gap-5'>
			<div className='rounded-full overflow-hidden w-40 h-40'>
				<Image
					className='w-full h-full'
					src={image}
					alt={username?.[0]}
					width={500}
					height={500}
					unoptimized
				/>
			</div>
			<H2 title={username?.[0] || me.username} />
			<div>{friendsCount} friends</div>
			<p className='text-center text-lg'>{bio}</p>
			<ProfilePosts username={username?.[0] || me.username} />
		</main>
	)
}

export default Profile
