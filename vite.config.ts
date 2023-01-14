import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
	test: {
		// use to 'jsdom' or 'happy-dom' if building a browser package
		// https://vitest.dev/config/#environment
		environment: "node",
		coverage: {
			include: ["packages/*/**/*.test.{ts,tsx,js,jsx}"],
			exclude: [...configDefaults.exclude],
		},
	},
});
