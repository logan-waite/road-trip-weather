import { createApp } from 'vue';

import { IonicVue } from '@ionic/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun as farSun, faCloudRain as farCloudRain } from '@fortawesome/pro-regular-svg-icons';
import { faSun as falSun, faCloudRain as falCloudRain } from '@fortawesome/pro-light-svg-icons';
import { store } from './store';
import router from './router';
import App from './App.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

library.add(farSun, falSun, farCloudRain, falCloudRain);

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(IonicVue)
  .use(router)
  .use(store);

router.isReady().then(() => {
  app.mount('#app');
});
