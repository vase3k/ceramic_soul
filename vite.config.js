import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import createFoldersPlugin from './src/js/createFolder';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalog: 'catalog.html',
                about: 'about.html',
                blog: 'blog.html',
            },
        },
    },
    plugins: [createFoldersPlugin()],
});
