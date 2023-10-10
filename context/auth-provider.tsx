import { SessionProvider } from 'next-auth/react'

type TProps = React.PropsWithChildren

const AuthProvider: React.FC<TProps> = ({ children }: TProps): JSX.Element => (
	<SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
