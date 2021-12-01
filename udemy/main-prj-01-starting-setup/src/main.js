import { createApp } from 'vue';

import appRouter from './router.js'
import store from './store/index.js'
import App from './App.vue';

const app = createApp(App);

app.use(appRouter);
app.use(store);

app.mount('#app');
