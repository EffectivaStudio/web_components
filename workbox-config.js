// https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build

module.exports = {
	skipWaiting: true,
	sourcemap: false,
	globDirectory: 'playground',
	globPatterns: [],
	swDest: 'sw_native_web_components.js',
	runtimeCaching: [{
		urlPattern: (req) => {
			return !req.sameOrigin; // remote url
		},
		handler: 'CacheFirst',

		options: {
			cacheName: 'esm'
		},
	}],
};
