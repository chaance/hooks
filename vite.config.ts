import react from "@vitejs/plugin-react";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		// globals: true,
		environment: "happy-dom",
		setupFiles: "./src/test/setup.ts",
		coverage: {
			include: ["packages/*/**/*.test.{ts,tsx,js,jsx}"],
			exclude: [...configDefaults.exclude],
		},
	},
});
