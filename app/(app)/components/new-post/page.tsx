'use client'

import { useFormik } from 'formik'
import Textarea from '@/components/form/textarea'
import Button from '@/components/button/button'

type Form = {
	content: string
}

const initialValues: Form = {
	content: '',
}

const handleFormSubmit = () => {}

const NewPost: React.FC = (): JSX.Element => {
	const { values, handleChange, handleBlur, handleSubmit } = useFormik<Form>({
		initialValues,
		onSubmit: handleFormSubmit,
	})
	return (
		<form onSubmit={handleSubmit} className='w-full'>
			<Textarea
				className='w-full'
				name='content'
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder='What do you want to post?'
			/>
			<Button type='submit' className='w-40 ml-auto'>
				Post
			</Button>
		</form>
	)
}

export default NewPost
