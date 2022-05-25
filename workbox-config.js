module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};