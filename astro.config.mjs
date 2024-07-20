import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	output: "static",

	integrations: [
		starlight({
			title: 'Adrian "Icaruk"',
			social: {
				github: "https://github.com/icaruk",
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				{
					label: "About me",
					autogenerate: { directory: "about" },
				},
				{
					label: "Work",
					autogenerate: { directory: "work" },
				},
			],
			customCss: ["./src/assets/landing.css"],
			editLink: {
				baseUrl: "https://github.com/icaruk/icaruk.dev/edit/main/",
			},
		}),
	],
});
