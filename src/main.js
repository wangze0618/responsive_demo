import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@csstools/normalize.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
createApp(App).use(store).use(router).mount("#app");
