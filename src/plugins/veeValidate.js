import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate, {
  events: 'change|blur|input'
});