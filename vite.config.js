import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
/**
 * https://vitejs.dev/config/
 */
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		globals: true,
		setupFiles: ['./tests/setup.js'],
	},
});

/*
  Note:
  - add 'test: {}' above makes vitest watch all files
  - install eslint-plugin-vitest-globals 
  - add setupFiles for vitest use only
*/
