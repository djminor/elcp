import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

import languageData from "./lang-data/test.js";

let data = {
  dictionary: languageData,
}

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount("#app")
