module.exports = {
	apps: [
		{
			name: "icarukdev",
			script: "npm",
			args: "run serve",

			log_date_format: "DD/MM/YYYY HH:mm:ss Z",

			instances: 1,
			exec_mode: "fork",
			watch: true,

			exp_backoff_restart_delay: 100,
			ignore_watch: ["node_modules", ".github"],

			env: {
				NODE_ENV: "production",
				TZ: "Europe/Madrid",
			},
		},
	],
};
