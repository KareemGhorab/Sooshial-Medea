export type TUser = {
	id: string
	profilePicture?: string
	name: string
}

export type TPost = {
	id: string
	author: TUser
	content: string
	picture?: string
}
