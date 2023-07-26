import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import '@/globals.css';

// Add font awesome icon needed to library
library.add(faSearch);

// Set font awesome as component to Vue App
createApp(App).component('font-awesome', FontAwesomeIcon).mount('#app');
