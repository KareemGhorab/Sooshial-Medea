import clsx from 'clsx'
import cabin from '@/utils/fonts/cabin'

type Props = {
	title: string
}

const H1: React.FC<Props> = ({ title }): JSX.Element => (
	<h1 className={clsx(cabin.className, 'text-7xl font-bold')}>{title}</h1>
)

export default H1
