import moment from "moment";
import helpers from './helpers'

export default {
  install(Vue) {
    // helpers
    Vue.prototype.$helpers = helpers

    Vue.prototype.$storage = window.localStorage;

    Vue.prototype.$moment = moment;
  }
};
