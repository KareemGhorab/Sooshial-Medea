import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (!request.nextauth.token)
			return NextResponse.redirect(new URL('/auth', request.url))
	},
	{
		callbacks: {
			authorized: () => true,
		},
	}
)

export const config = {
	matcher: ['/', '/profile'],
}
