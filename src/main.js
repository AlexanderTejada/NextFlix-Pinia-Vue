// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';  // Importar Pinia
import './assets/main.css';  // Estilos
import App from './App.vue';  // Componente principal

// Crear la instancia de Pinia
const pinia = createPinia();

// Crear la aplicación
const app = createApp(App);

// Usar Pinia
app.use(pinia);

// Montar la aplicación
app.mount('#app');
