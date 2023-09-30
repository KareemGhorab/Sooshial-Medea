import clsx from 'clsx'
import cabin from '@/utils/fonts/cabin'

type Props = {
	title: string
}

const H3: React.FC<Props> = ({ title }): JSX.Element => (
	<h3 className={clsx(cabin.className, 'text-5xl')}>{title}</h3>
)

export default H3
