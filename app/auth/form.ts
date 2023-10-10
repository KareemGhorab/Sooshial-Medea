import { object, string } from 'yup'
import { passwordError, passwordRegex } from '@/validations/password'
import { apiClient } from '@/service/client/api-client'
import { signIn } from 'next-auth/react'

export type LoginForm = {
	email: string
	password: string
}

export type RegisterForm = LoginForm & {
	name: string
}

export const LoginInitialValues: LoginForm = {
	email: '',
	password: '',
}

export const RegisterInitialValues: RegisterForm = {
	email: '',
	password: '',
	name: '',
}

export const loginValidationSchema = object({
	email: string().required().email(),
	password: string().required(),
})

export const registerValidationSchema = object({
	email: string().required().email(),
	password: string().required().matches(passwordRegex, passwordError),
	name: string().required().min(3).max(20),
})

export const handleLogin = async (data: LoginForm) => {
	const user = await signIn('credentials', {
		...data,
		redirect: false,
	})
	if (user?.error) {
		throw new Error(user.error)
	}
}

export const handleRegister = async (data: RegisterForm) => {
	return await apiClient.post('/api/auth/register', data)
}
