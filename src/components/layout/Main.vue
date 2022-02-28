<template>
  <div class="layout--main flex flex-row">
    <div class="page w-full">
      <SideBar></SideBar>
      <BottomBar></BottomBar>
      <div id="content-area" :class="{
        'content-area page-content': true }">
        <div class="router-view p-16">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "./SideBar.vue";
import BottomBar from "./BottomBar.vue";

export default {
  name: "layout-main",
  components: {
    SideBar,
    BottomBar
  },
  data: () => {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang="scss"></style>
