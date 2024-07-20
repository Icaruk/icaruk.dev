module.exports = {
	apps: [
		{
			name: "icarukdev",
			script: "serve",

			log_date_format: "DD/MM/YYYY HH:mm:ss Z",

			instances: 1,
			exec_mode: "fork",
			watch: true,

			exp_backoff_restart_delay: 100,
			ignore_watch: ["node_modules", ".github"],

			env: {
				NODE_ENV: "production",
				TZ: "Europe/Madrid",
				PM2_SERVE_PATH: "dist",
				PM2_SERVE_PORT: 8200,
				PM2_SERVE_SPA: true,
				PM2_SERVE_HOMEPAGE: "/index.html",
			},
		},
	],
};
