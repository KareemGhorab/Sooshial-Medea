import Button from '@/components/button/button'
import H3 from '@/components/header/h3'
import Link from 'next/link'

const NotFound: React.FC = (): JSX.Element => (
	<main className='flex justify-center items-center min-h-screen flex-col'>
		<H3 title='Oops! There is nothing here' />
		<Link href='/'>
			<Button>Back to Home</Button>
		</Link>
	</main>
)
export default NotFound
