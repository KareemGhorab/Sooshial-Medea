'use client'

import { useFormik } from 'formik'
import clsx from 'clsx'
import {
	LoginForm,
	RegisterForm,
	RegisterInitialValues,
	handleLogin,
	handleRegister,
	registerValidationSchema,
} from '../form'
import Input from '@/components/form/input'
import Card from '@/components/ui/card/card'
import Button from '@/components/button/button'

import styles from '../auth.module.css'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { toastOptions } from '@/utils/toast'

const AuthPage: React.FC = (): JSX.Element => {
	const router = useRouter()

	const register = (data: RegisterForm) => {
		handleRegister(data)
			.then(() => {
				router.replace('/auth?success=true')
			})
			.catch((err) =>
				toast.error('Email already registered', toastOptions)
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
	} = useFormik<RegisterForm>({
		initialValues: RegisterInitialValues,
		onSubmit: (data) => {
			register(data)
			setSubmitting(false)
		},
		validationSchema: registerValidationSchema,
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
							id='name'
							name='name'
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Entr ur NAme'
						/>
						<small className=''>
							{errors.name && touched.name && errors.name}
						</small>
					</div>
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
						{isSubmitting ? <>Loading...</> : <>Register</>}
					</Button>
				</form>
				<div className='my-3'></div>
				<p className={styles.extra}>
					Have an account?? 
					<Button type='button' onClick={() => router.push('/auth')}>
						Login
					</Button>
				</p>
			</Card>
		</main>
	)
}

export default AuthPage
