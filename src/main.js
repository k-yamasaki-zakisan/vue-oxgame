import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
});