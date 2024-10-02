import * as js from "@chance/eslint";
import * as typescript from "@chance/eslint/typescript";
import * as react from "@chance/eslint/react";
import * as vitest from "@chance/eslint/vitest";

export default [
	{ ignores: ["dist/**/*"] },
	js.config,
	typescript.config,
	react.config,
	vitest.config,
];
