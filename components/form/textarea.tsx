import clsx from 'clsx'

import styles from './input.module.css'

type Props = {
	name: string
} & React.HtmlHTMLAttributes<HTMLTextAreaElement>

const Textarea: React.FC<Props> = ({ className, ...props }): JSX.Element => (
	<textarea {...props} className={clsx(styles.control, 'h-56 py-5', className)} />
)

export default Textarea
