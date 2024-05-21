/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					marineBlue: 'hsl(213, 96%, 18%)',
					purpleBlue: 'hsl(243, 100%, 62%)',
					pastelBlue: 'hsl(228, 100%, 84%)',
					lightBlue: 'hsl(206, 94%, 87%)',
					strawRed: 'hsl(354, 84%, 57%)',
				},
				neutral: {
					coolGray: 'hsl(231, 11%, 63%)',
					lightGray: 'hsl(229, 24%, 87%)',
					magnolia: 'hsl(217, 100%, 97%)',
					alabaster: 'hsl(231, 100%, 99%)',
					white: 'hsl(0, 0%, 100%)',
				},
			},
		},
	},
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: ["light", "dark"]
	}
};
