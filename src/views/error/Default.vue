<template>
  <div>
    <div class="bg-white absolute w-full shadow hidden sm:block">
      <div
        class="container px-5  mx-auto flex items-center sm:flex-row flex-col"
      >
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
        <img
          class="w-24 h-24"
          src="@/assets/logo/Logo.svg"
        />
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default{
  name: "ErrorDefault"
}
</script>

