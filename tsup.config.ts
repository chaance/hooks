import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "tsup";
import pkgJson from "./package.json";

let { name: packageName, version: packageVersion } = pkgJson;

export default defineConfig((options) => {
	const entry = getEntrypoints();
	const external = ["react", "react-dom"];
	const target = "es2020";
	const banner = createBanner({
		author: "Chance Strickland",
		creationYear: 2022,
		license: "MIT",
		packageName,
		version: packageVersion,
	});

	return [
		// cjs
		{
			entry,
			format: "cjs",
			sourcemap: true,
			external,
			banner: { js: banner },
			target,
		},

		// esm + d.ts
		{
			entry,
			format: "esm",
			sourcemap: true,
			external,
			banner: { js: banner },
			target,
			dts: { banner },
		},
	];
});

function createBanner({
	packageName,
	version,
	author,
	license,
	creationYear,
}: {
	packageName: string;
	version: string;
	author: string;
	license: string;
	creationYear: string | number;
}) {
	let currentYear = new Date().getFullYear();
	let year =
		currentYear === Number(creationYear)
			? currentYear
			: `${creationYear}-${currentYear}`;

	return `/**
 * ${packageName} v${version}
 *
 * Copyright (c) ${year}, ${author}
 *
 * This source code is licensed under the ${license} license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @license ${license}
 */
`;
}

function getEntrypoints() {
	const srcDir = path.join(__dirname, "src");
	return fs
		.readdirSync(srcDir)
		.map((fileOrDirectoryName) => {
			let filePath = path.join(srcDir, fileOrDirectoryName);
			if (isValidEntrypoint(filePath)) {
				return `src/${fileOrDirectoryName}`;
			}
			return null;
		})
		.filter((v): v is string => v != null);
}

function isValidEntrypoint(filePath: string) {
	return (
		fs.statSync(filePath).isFile() &&
		(path.extname(filePath) === ".ts" || path.extname(filePath) === ".tsx") &&
		!/\.test\.(ts|tsx)$/.test(filePath)
	);
}
