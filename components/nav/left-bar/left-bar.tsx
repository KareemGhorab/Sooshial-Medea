import clsx from 'clsx'
import LeftBarList from './left-bar-list'

const LeftBar: React.FC<{ className?: string }> = ({
	className,
}): JSX.Element => {
	return (
		<section
			className={clsx(
				'flex border-r-2 border-primary-400 bg-white',
				className
			)}
		>
			<LeftBarList />
		</section>
	)
}

export default LeftBar
