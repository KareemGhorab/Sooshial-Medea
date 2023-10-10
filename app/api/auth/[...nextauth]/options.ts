import type { NextAuthOptions, Session } from 'next-auth'
import { object, string } from 'yup'
import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/prisma/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Validate the body
				const schema = object({
					email: string().required().email(),
					password: string().required(),
				})
				const { email: caseSensitiveEmail, password } =
					schema.validateSync(credentials)
				const email = caseSensitiveEmail.toLowerCase()
				// Check for email existence
				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				})

				if (!user || !user.hashedPassword)
					throw new Error("This email isn't registered")

				// Check password match
				const passwordMatch = bcrypt.compareSync(
					password,
					user.hashedPassword
				)

				if (!passwordMatch) throw new Error('Incorrect password')

				return user
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 30,
	},
	adapter: PrismaAdapter(prisma),
	debug: process.env.NODE_ENV === 'development',
}
