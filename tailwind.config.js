/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	safelist: ["w-3", "h-3"],
	theme: {
		extend: {
			colors: {
				primary: "#fbfbfd",
				background: "#0b0b19",
				"background-gradient": "#041329",
				graph: "#5f6aad",
				positive: "#2fba1a",
				negative: "#8b2c34",
			},
			fontFamily: {
				space: "Space Grotesk",
				"space-mono": "Space Mono",
			},
		},
	},
	plugins: [],
}
