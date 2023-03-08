import './bootstrap';

// Importiamo il nostro stile custom
import '~resources/scss/app.scss';

// Importiamo la parte JS di Bootstrap
import * as bootstrap from 'bootstrap';

// Istruiamo Vite e Blade affinchè processino correttamente i nostri assets
import.meta.glob([
    '../img/**'
]);
