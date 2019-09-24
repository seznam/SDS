// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/main.js',
		format: 'cjs',
		name: 'sdsReact',
	},
	plugins: [
		resolve({
			mainFields: ['module', 'main'],
			extensions: ['.mjs', '.js', '.jsx', '.json'],
			modulesOnly: true,
			dedupe: [ 'react', 'react-dom' ],
		}),
	],
	external: ['react', 'prop-types', '@sznds/helpers', '@sznds/icons'],
};
