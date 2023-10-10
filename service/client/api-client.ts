import axios from 'axios'

const axiosClientSingleton = () => {
	return axios.create({ baseURL: '/' })
}

type axiosClientSingleton = ReturnType<typeof axiosClientSingleton>

const globalForAxios = globalThis as unknown as {
	apiClient: axiosClientSingleton | undefined
}

export const apiClient = globalForAxios.apiClient ?? axiosClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForAxios.apiClient = apiClient
