import clsx from 'clsx'
import { PropsWithChildren } from 'react'

import styles from './modal.module.css'

type Props = {
	className?: string
} & PropsWithChildren

const Modal: React.FC<Props> = ({ children, className }): JSX.Element => (
	<div className='bg-black bg-opacity-75 absolute inset-0 flex justify-center items-center'>
		<div className={clsx('bg-white', styles.modal, className)}>
			
		</div>
	</div>
)

export default Modal
