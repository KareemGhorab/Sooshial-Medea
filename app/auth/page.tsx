'use client'

import { useFormik } from 'formik'
import clsx from 'clsx'
import {
	LoginForm,
	LoginInitialValues,
	RegisterForm,
	handleLogin,
	handleRegister,
	loginValidationSchema,
} from './form'
import Input from '@/components/form/input'
import Card from '@/components/ui/card/card'
import Button from '@/components/button/button'

import styles from './auth.module.css'
import { useRouter, useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { toastOptions } from '@/utils/toast'
import { useEffect } from 'react'

const AuthPage: React.FC = (): JSX.Element => {
	const router = useRouter()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (searchParams.get('success'))
			toast.success('Account made successfully', toastOptions)
	}, [searchParams])

	const login = (data: LoginForm) => {
		handleLogin(data)
			.then(() => router.replace('/'))
			.catch((err) =>
				toast.error(err?.message || 'Unexpected error', toastOptions)
			)
	}

	const {
		touched,
		errors,
		handleChange,
		handleSubmit,
		handleBlur,
		isSubmitting,
		setSubmitting,
	} = useFormik<LoginForm>({
		initialValues: LoginInitialValues,
		onSubmit: (data) => {
			login(data)
			setSubmitting(false)
		},
		validationSchema: loginValidationSchema,
	})

	return (
		<main
			className={clsx(
				'flex justify-center items-center min-h-screen',
				styles.form
			)}
		>
			<ToastContainer />
			<Card>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-5 w-72'
				>
					<div>
						<Input
							id='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Etner Emaail'
						/>
						<small className=''>
							{errors.email && touched.email && errors.email}
						</small>
					</div>
					<div>
						<Input
							id='password'
							name='password'
							type='password'
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Enetr Passswoor'
						/>
						<small className=''>
							{errors.password &&
								touched.password &&
								errors.password}
						</small>
					</div>
					<Button variant='secondary' type='submit'>
						{isSubmitting ? <>Loading...</> : <>Login</>}
					</Button>
				</form>
				<div className='my-3'></div>
				<p className={styles.extra}>
					No account? no problem 
					<Button
						onClick={() => {
							router.push('/auth/register')
						}}
					>
						Register
					</Button>
				</p>
			</Card>
		</main>
	)
}

export default AuthPage
