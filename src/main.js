import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
Vue.use(VueRouter)
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

import { Lazyload } from 'vant';

Vue.use(Lazyload);
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);
import { Search } from 'vant';

Vue.use(Search);

// export default {
//   data() {
//     return {
//       images: [
//         "https://img01.yzcdn.cn/vant/apple-1.jpg",
//         "https://img01.yzcdn.cn/vant/apple-2.jpg",
//       ],
//     };
//   },
// };


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
