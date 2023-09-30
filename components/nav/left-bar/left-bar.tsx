import clsx from 'clsx'

const LeftBar: React.FC<{ className?: string }> = ({
	className,
}): JSX.Element => {
	return (
		<section
			className={clsx(
				'hidden md:flex border-r-2 border-primary-400',
				className
			)}
		></section>
	)
}

export default LeftBar
