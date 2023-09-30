import clsx from 'clsx'
import cabin from '@/utils/fonts/cabin'

type Props = {
	title: string
}

const H4: React.FC<Props> = ({ title }): JSX.Element => (
	<h4 className={clsx(cabin.className, 'text-4xl')}>{title}</h4>
)

export default H4
