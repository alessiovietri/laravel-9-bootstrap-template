import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: [
                // Modifichiamo il percorso del css usando sass
                'resources/scss/app.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],

    resolve: {
        alias: {
            //Aggiungiamo un alias per la cartella /resources/
            '~resources': '/resources/',

            //Aggiungiamo un alias per la cartella node_modules/bootstrap
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});
