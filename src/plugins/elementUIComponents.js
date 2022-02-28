import Vue from 'vue'

import {
  Input,
  Button,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Dialog,
  MessageBox,
  Message
} from "element-ui";

import '@/assets/scss/_element-variables.scss'
Vue.use(Input);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;