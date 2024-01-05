/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1F2E55',
				'secondary': '#717FA6',
				'accent': '#382AE1',
				'accent-hover' : '#766CF1',
			},
			boxShadow: {
				'card': '00px 40px 40px -20px rgba(13, 48, 189, 0.15)',
				'button' : '0px 20px 20px 0px rgba(56, 42, 225, 0.19)',
			},
		},
	},
	plugins: [],
}
