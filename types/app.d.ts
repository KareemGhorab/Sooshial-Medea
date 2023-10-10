export type TImage = {
	id: string
	src: string
	alt: string
	width: number
	height: number
}

export type TUser = {
	id: string
	profilePicture?: TImage
	name: string
}

export type TPost = {
	id: string
	author: TUser
	content: string
	image?: TImage
}
