import clsx from 'clsx'

const RightBar: React.FC<{ className?: string }> = ({
	className,
}): JSX.Element => (
	<section
		className={clsx(
			'border-l-2 border-primary-400 bg-white',
			className
		)}
	></section>
)

export default RightBar
