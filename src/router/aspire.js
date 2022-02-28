export default {
  path: '/',
  meta: {
    auth: false
  },
  component: () => import(/* webpackChunkName: "layout-main" */ '@/components/layout/Main.vue'),
  children: [
    {
      path: "",
      redirect: "/dashboard/cards",
    },
    {
      path: "/dashboard",
      name: "home",
      component: () => import(/* webpackChunkName: "home-view" */ "@/views/aspire/Home.vue"),
    },
    {
      path: "dashboard/cards",
      name: "cards-view",
      component: () => import(/* webpackChunkName: "cards-view" */ "@/views/aspire/Cards.vue")
    },
    {
        path: 'dashboard/payments',
        name: 'payments-view',
        component: () => import(/* webpackChunkName: "payments-view" */ '@/views/aspire/Payments.vue')
    },
    {
        path: 'dashboard/credit',
        name: 'credit-view',
        component: () => import(/* webpackChunkName: "credit-view" */ '@/views/aspire/Credit.vue')
    },
    {
        path: 'dashboard/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "settings-view" */ '@/views/aspire/Settings.vue')
    }

  ]
};
