import clsx from 'clsx'
import cabin from '@/utils/fonts/cabin'

type Props = {
	title: string
}

const H2: React.FC<Props> = ({ title }): JSX.Element => (
	<h2 className={clsx(cabin.className, 'text-6xl')}>{title}</h2>
)

export default H2
