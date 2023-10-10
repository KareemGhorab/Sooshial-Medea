import clsx from 'clsx'

import styles from './input.module.css'

type Props = {
	name: string
	type?: 'text' | 'password' | 'email'
} & React.HtmlHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({ className, type, ...props }): JSX.Element => (
	<input
		type={type}
		{...props}
		className={clsx(
			styles.control,
			'border-2 border-primary-400 px-2 py-1 w-full focus:outline-none transition-all duration-200'
		)}
	/>
)

export default Input
