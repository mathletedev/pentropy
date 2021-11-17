const { gray } = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto"]
			},
			colors: {
				gray
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	darkMode: "media",
	important: true
};
