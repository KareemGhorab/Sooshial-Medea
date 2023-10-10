import { NextRequest, NextResponse } from 'next/server'

export const checkAsyncFunction = async (
	request: NextRequest,
	func: (request: NextRequest) => Promise<Response>
) => {
	try {
		return await func(request)
	} catch (err: any) {
		return NextResponse.json(
			{ message: err.message },
			{ status: err.status || 400 }
		)
	}
}
