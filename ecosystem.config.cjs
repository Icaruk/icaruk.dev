module.exports = {
	apps: [
		{
			name: "icarukdev",
			script: "serve",
			log_date_format: "DD/MM/YYYY HH:mm:ss Z",

			env: {
				PM2_SERVE_PATH: ".dist",
				PM2_SERVE_PORT: 8200,
				PM2_SERVE_SPA: "true",
				PM2_SERVE_HOMEPAGE: "./index.html",
			},
			env_production: {
				NODE_ENV: "production",
				TZ: "Europe/Madrid",
			},
		},
	],
};
