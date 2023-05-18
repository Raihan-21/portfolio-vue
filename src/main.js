import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

import router from "./router";
import "@/assets/styles/main.scss";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
