import Vue from 'vue';
import App from './App.vue';
import resize from './utils/resize';

resize();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
