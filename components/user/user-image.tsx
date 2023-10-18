import Image from "next/image";

type Props = {
	image: string,
	username: string
}

const UserImage: React.FC<Props> = ({image,username}): JSX.Element => (
	<div className="rounded-full overflow-hidden h-12 w-12">
		<Image
			className="h-full w-full"
			src={image}
			alt={username}
			width={48}
			height={48}
			unoptimized
		/>
	</div>
)

export default UserImage