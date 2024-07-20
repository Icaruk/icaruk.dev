module.exports = {
	apps: [
		{
			name: "icarukdev",
			script: "pm2",

			args: "serve ./dist --port 8200",
			log_date_format: "DD/MM/YYYY HH:mm:ss Z",

			env_production: {
				NODE_ENV: "production",
				TZ: "Europe/Madrid",
			},
		},
	],
};
