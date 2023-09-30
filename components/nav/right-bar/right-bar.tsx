import clsx from 'clsx'

const RightBar: React.FC<{ className?: string }> = ({
	className,
}): JSX.Element => (
	<section
		className={clsx(
			'hidden md:flex border-l-2 border-primary-400',
			className
		)}
	></section>
)

export default RightBar
