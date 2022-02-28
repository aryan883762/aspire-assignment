export default {
  data() {
    return {
      back: true
    };
  },
  methods: {
    goBack() {
      if (this.back) {
        this.$router.back();
      } else {
        // taking the to the correct dashboard
        this.goHome();
      }
    },
    goHome() {
        this.$router.push({ name: 'home' });
    }
  },

  beforeRouteEnter(to, from, next) {
    // finding out if it was the first url to handle back
    next(vm => {
      vm.back = !(from.fullPath === '/' && from.matched.length == 0 && from.name == null);
      // preventing subdmoainrequired from going back
      if (vm.back) {
          vm.back = false;
        }
    });
  }
};
