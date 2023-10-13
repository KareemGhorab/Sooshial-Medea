import { NextRequest, NextResponse } from 'next/server'
import { object, string } from 'yup'
import bcrypt from 'bcrypt'
import { prisma } from '@/prisma/db'
import { checkAsyncFunction } from '../../utils/error-handler'
import { passwordError, passwordRegex } from '@/validations/password'

export const POST = (req: NextRequest) =>
	checkAsyncFunction(req, async (request: NextRequest): Promise<Response> => {
		const body = await request.json()

		console.log(body)

		// Body Validation
		const schema = object({
			name: string().required(),
			email: string().email().required(),
			password: string().matches(passwordRegex, passwordError).required(),
		})

		const {
			email: caseSensitiveEmail,
			name,
			password,
		} = await schema.validate(body)

		const email = caseSensitiveEmail.toLowerCase()

		// Email Conflict Check
		const userExist = await prisma.user.findUnique({
			where: {
				email,
			},
		})

		if (userExist)
			throw new Error('This email address is already registered')

		const nameExist = await prisma.user.findUnique({
			where: {
				name,
			},
		})

		if (nameExist)
			throw new Error('This name is taken')

		// Hash Password
		const hashedPassword = bcrypt.hashSync(
			password,
			+(process.env.SALT_ROUNDS ?? 10)
		)

		// Make a New User
		const user = await prisma.user.create({
			data: {
				name,
				email,
				hashedPassword,
				profilePicture: `https://ui-avatars.com/api/?name=${name
					.split(' ')
					.join('+')}`,
			},
		})

		return NextResponse.json(user, { status: 201 })
	})
