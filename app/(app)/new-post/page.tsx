'use client'

import { useFormik } from 'formik'
import Textarea from '@/components/form/textarea'
import Button from '@/components/button/button'
import { postPost } from '@/service/post'
import { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { toastOptions } from '@/utils/toast'
import Loading from '@/components/ui/loading'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

type Form = {
	content: string
}

const initialValues: Form = {
	content: '',
}

const NewPost: React.FC = (): JSX.Element => {
	const router = useRouter()

	const handleFormSubmit = useCallback(({ content }: Form) => {
		postPost(content)
			.then(() => {
				toast.success('Posted successfully', toastOptions)
				setTimeout(() => router.push('/'), 2000)
			})
			.catch((error: AxiosError) =>
				toast.error(error.message, toastOptions)
			)
			.finally(() => setSubmitting(false))
	}, [])

	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
		setSubmitting,
	} = useFormik<Form>({
		initialValues,
		onSubmit: handleFormSubmit,
	})
	return (
		<form onSubmit={handleSubmit} className='w-full'>
			<ToastContainer />
			{isSubmitting ? (
				<div className='flex justify-center items-center h-56'>
					<Loading />
				</div>
			) : (
				<Textarea
					className='w-full resize-none'
					name='content'
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder='What do you want to post?'
					autoFocus
				/>
			)}
			<Button type='submit' className='w-40 ml-auto'>
				Post
			</Button>
		</form>
	)
}

export default NewPost
