import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入 router
import router from "./router/index.ts";

const app = createApp(App);

app.use(router).mount("#app");
