import Vue from 'vue';
import VueRouter from 'vue-router';

import Aspire from './aspire.js';
import Error from './error.js';

Vue.use(VueRouter);

const routes = [
  Aspire,
  Error // error should always be last
];

const router = new VueRouter({
  mode: 'history',
  routes
});
router.afterEach(() => {
});
export default router;
