import clsx from 'clsx'

import styles from './button.module.css'

type Props = {
	variant?: 'primary' | 'secondary'
} & React.HtmlHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ variant = 'primary', ...props }) => {
	return (
		<button
			{...props}
			className={clsx(
				'px-3 py-1 rounded-md text-xl',
				styles.btn,
				{
					'border border-primary-400 bg-white text-primary-400 hover:bg-primary-400 hover:text-white hover:border-primary-400':
						variant === 'primary',
					'border border-primary-400 bg-primary-400 text-white hover:bg-white hover:text-primary-400':
						variant === 'secondary',
				},
				props.className
			)}
		/>
	)
}

export default Button
