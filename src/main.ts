import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

// @ts-ignore
createApp(App).use(router).use(createPinia()).mount("#app");