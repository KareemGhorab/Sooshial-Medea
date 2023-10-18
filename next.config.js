/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['placehold.co'],
	},
	experimental: {
		serverActions: true
	}
}

module.exports = nextConfig
