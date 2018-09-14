// rollup.config.js
import resolve from "rollup-plugin-node-resolve";

export default {
	input: "dist/index.js",
	output: {
		file: "dist/main.js",
		format: "cjs",
		name: "SZNDSReact"
	},
	plugins: [
		resolve({
			module: true,
			extensions: [".mjs", ".js", ".jsx", ".json"],
			modulesOnly: true
		})
	],
	external: [ "react", "@szn-ds/helpers", "@szn-ds/icons" ]
};
