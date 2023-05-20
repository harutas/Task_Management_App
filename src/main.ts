import { createApp } from 'vue';
import App from '@/App.vue';
// Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './main.scss';
// Pinia
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).mount('#app');
