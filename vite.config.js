import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const removeCrossorigin = () => {
    return {
        name: 'remove-crossorigin',
        transformIndexHtml(html) {
            return html
                .replace(`type="module" crossorigin`, 'type="module"')
                .replace(`rel="stylesheet" crossorigin`, 'rel="stylesheet"');
        },
    };
};

export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalog: resolve(__dirname, 'catalog.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog.html'),
            },
        },
    },
    plugins: [removeCrossorigin()],
});
