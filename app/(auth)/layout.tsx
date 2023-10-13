'use client'

import AuthProvider from '@/context/auth-provider'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<AuthProvider>{children}</AuthProvider>
)
export default AuthLayout