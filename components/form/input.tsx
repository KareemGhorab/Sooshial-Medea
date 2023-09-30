import clsx from 'clsx'

import styles from './input.module.css'

type Props = {} & React.HtmlHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({ className, ...props }): JSX.Element => (
	<input
		{...props}
		className={clsx(
			styles.control,
			'border-2 border-primary-400 px-2 py-1 w-full focus:outline-none transition-all duration-200'
		)}
	/>
)

export default Input
