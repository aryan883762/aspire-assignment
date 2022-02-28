<template>
  <div class="h-screen flex w-full bg-white">
    <div
      class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
    >
      <img src="@/assets/images/500.png" alt="graphic-404" class="mx-auto mb-4 max-w-full" />
      <h1 class="sm:mx-0 mx-4 mb-12 text-5xl text-black">Internal Server Error!</h1>
      <div class="flex flex-row">
        <el-button type="primary" @click="goBack">Back</el-button>
        <el-button type="primary" @click="goHome">Home</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BackNavigationMixin from "@/mixins/BackNavigationMixin";

export default {
  name: "error-500",
  mixins: [BackNavigationMixin]
};
</script>
