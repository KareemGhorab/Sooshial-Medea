import { TUser } from '@/types/user/app'
import { dummyUser } from './dummy'
import { mapToUser } from '@/types/user/map'

export const whoami = async (): Promise<TUser> => {
	return Promise.resolve(mapToUser(dummyUser))
}

export const changeImage = async (image: string) => {
	return Promise.resolve()
}
