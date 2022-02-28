<template>
  <!-- Bottom-bar -->
  <div class="bottom-bar flex flex-row justify-between bg-white shadow-lg border fixed bottom-0 z-10 w-full px-8 p-4">
    <div :class="{'flex flex-col': true,
        'text-success font-semibold': (activeLink === '/dashboard')}">
      <router-link class="flex flex-col items-center" :to="{ name: 'home' }">
        <img src="@/assets/icons/Logo_mobile.svg" alt="home">
        <span class="text-9">Home</span>
      </router-link>
    </div>
    <div :class="{'flex flex-col': true,
        'text-success font-semibold': (activeLink.indexOf('cards') >-1) }">
      <router-link class="flex flex-col items-center" :to="{ name: 'cards-view' }">
        <img src="@/assets/icons/Card.svg" alt="card">
        <span class="text-9">Cards</span>
      </router-link>
    </div>
    <div :class="{'flex flex-col': true,
        'text-success font-semibold': (activeLink.indexOf('payments') >-1) }">
      <router-link class="flex flex-col items-center" :to="{ name: 'payments-view' }">
        <img src="@/assets/icons/Payments.svg" alt="payment">
        <span class="text-9">Payments</span>
      </router-link>
    </div>
    <div :class="{'flex flex-col': true,
        'text-success font-semibold': (activeLink.indexOf('credit') >-1) }">
      <router-link class="flex flex-col items-center" :to="{ name: 'credit-view' }">
        <img src="@/assets/icons/Credit_mobile.svg" alt="credit">
        <span class="text-9">Credit</span>
      </router-link>
    </div>
    <div :class="{'flex flex-col': true,
        'text-success font-semibold': (activeLink.indexOf('settings') >-1) }">
      <router-link class="flex flex-col items-center" :to="{ name: 'settings' }">
        <img src="@/assets/icons/user.svg" alt="account">
        <span class="text-9">Profile</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
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