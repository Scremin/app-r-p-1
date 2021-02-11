import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import GothamRoundedBold from '@/assets/fonts/Gotham-Rounded-Bold.ttf';
//import StarjediSpecialEdition9Bqy from '@/assets/fonts/StarjediSpecialEdition-9Bqy.ttf';

Vue.config.productionTip = false

new Vue({
  vuetify,
  //GothamRoundedBold,
  //StarjediSpecialEdition9Bqy,
  render: h => h(App)
}).$mount('#app')
