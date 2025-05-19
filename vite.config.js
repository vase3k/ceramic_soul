import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const removeCrossorigin = () => {
    return {
        name: 'remove-crossorigin',
        transformIndexHtml(html) {
            return html.replace(/crossorigin/g, '');
        },
    };
};

export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    plugins: [removeCrossorigin()],
});
