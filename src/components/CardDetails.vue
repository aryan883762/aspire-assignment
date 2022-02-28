<template>
  <div class="card-details">
    <div class="border rounded-lg">
      <div class="p-5 bg-secondary header flex items-center justify-between aspire-shadow-inner rounded-lg cursor-pointer"
        @click="isCardDetailActive = !isCardDetailActive">
        <div class="left-title flex items-center">
          <img src="@/assets/icons/Group 11889.svg" svg-inline alt="aspire">
          <p class="text-base ml-2">Card Details</p>
        </div>
        <img src="@/assets/icons/down-arrow.svg" svg-inline alt="aspire">
      </div>
      <div class="card-contents p-4" v-if="isCardDetailActive">
        {{active_card.holder}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardDetails',
  components: {
  },
  data: () => {
    return {
      isCardDetailActive: false
    };
  },
  props: {
    active_card: {
      type: Object,
      required: true
    }
  },
}
</script>
