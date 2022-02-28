<template>
  <!-- Sidebar -->
  <div :class="{
      'left-sidebar flex flex-col fixed z-10': true }">
    <div class="m-12 space-y-16"> 
      <div class="items-center">
        <span class="cursor-pointer">
          <img src="@/assets/logo/Logo.svg" svg-inline alt="aspire">
        </span>
        <p class="text-15 leading-5 text-white opacity-30 mt-4">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
        <span class="ml-auto"></span>
      </div>
      <ul class="justify-start space-y-12">
        <li 
          :class="{
            'text-white':!(activeLink === '/dashboard'),
            'text-success font-semibold': (activeLink === '/dashboard')
          }">
          <router-link class="flex items-center" :to="{ name: 'home' }">
            <img src="@/assets/icons/Home.svg" alt="home">
            <span class="text-base ml-5 reduce-hide">Home</span>
          </router-link>
        </li>
        <li :class="{
            'text-white': !(activeLink.indexOf('cards') >-1),
            'text-success font-semibold': (activeLink.indexOf('cards') >-1)
          }">
          <router-link class="flex items-center" :to="{ name: 'cards-view' }" >
            <img src="@/assets/icons/Card.svg" alt="cards">
            <span class="text-base ml-5 reduce-hide">
              Cards
            </span>
          </router-link>
        </li>
        <li :class="{
            'text-white': !(activeLink.indexOf('payments') >-1),
            'text-success font-semibold': (activeLink.indexOf('payments')>-1)
          }">
          <router-link class="flex items-center" :to="{ name: 'payments-view' }">
            <img src="@/assets/icons/Payments.svg" alt="payments">
            <span class="text-base ml-5 reduce-hide">Payments</span>
          </router-link>
        </li>
        <li :class="{
            'text-white': !(activeLink.indexOf('credit') >-1),
            'text-success font-semibold': (activeLink.indexOf('credit')>-1)
          }">
          <router-link class="flex items-center" :to="{ name: 'credit-view' }">
            <img src="@/assets/icons/Credit.svg" alt="credit">
            <span class="text-base ml-5 reduce-hide">Credit</span>
          </router-link>
        </li>
        <li :class="{
            'text-white': !(activeLink.indexOf('settings') >-1),
            'text-success font-semibold': (activeLink.indexOf('settings')>-1)
          }">
          <router-link class="flex items-center" :to="{ name: 'settings' }">
            <img src="@/assets/icons/Account.svg" alt="account">
            <span class="text-base ml-5 reduce-hide">Settings</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  created() {
  },
  watch: {
  },
  computed: {
    activeLink() {
      return this.$route.path;
    }
  },
  methods: {
  }
};
</script>