import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import VCalendar from "v-calendar";

Vue.config.productionTip = false;

Vue.use(VCalendar);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
