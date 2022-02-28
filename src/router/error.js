export default {
  path: '/404',
  alias: '*',
  component: () => import(/* webpackChunkName: "error-default" */ '@/views/error/Default.vue'),
  children: [
    {
      path: '',
      name: 'error-404',
      component: () => import(/* webpackChunkName: "error-404" */ '@/views/error/Error404.vue')
    },
    {
      path: '/403',
      name: 'error-403',
      component: () => import(/* webpackChunkName: "error-403" */ '@/views/error/Error403.vue')
    },
    {
      path: '/500',
      name: 'error-500',
      component: () => import(/* webpackChunkName: "error-500" */ '@/views/error/Error500.vue')
    }
  ]
};

