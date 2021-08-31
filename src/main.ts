import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import { setupAntdIcon } from "./icons/antd-icons";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);

setupAntdIcon(app);

app.use(store).use(router).use(Antd).mount("#app");
