/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				surface: '#0a0a0a',
				'surface-elevated': '#141414',
				cream: '#f5f0e8',
				gold: '#c8a96e',
				'gold-light': '#d4b97e',
				muted: '#6b6b6b'
			},
			fontFamily: {
				display: ['"Playfair Display"', 'Georgia', 'serif'],
				body: ['Inter', 'system-ui', 'sans-serif']
			},
			letterSpacing: {
				'widest-plus': '0.2em'
			}
		}
	},
	plugins: []
};
