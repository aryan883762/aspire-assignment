<template>
  <div>
    <div class="cards relative" v-if="cards.length">
      <p class="show-card text-success text-xs font-bold text-right my-2 cursor-pointer" :class="activeCard.isFreeze?'mobile-effect':'bg-white'">
        <i class="el-icon-view"></i>
        Show card number</p>
      <div class="bg-success p-6 flex flex-col rounded-xl text-white font-bold relative" :class="{'opacity-70':activeCard.isFreeze}">
        <div class="logo-card flex justify-end">
          <img src="@/assets/icons/Aspire Logo-1.svg" alt="aspire">
        </div>
        <div class="card-holder mb-8">
          <p class="text-2xl font-bold">{{activeCard.holder}}</p>
        </div>
        <div class="card-number">
          <div class="grid grid-cols-5">
            <div class="col-span-1 space-x-1">
              <span class="bg-white rounded-full w-3 h-3 inline-block" v-for="item in 4" :key="item"></span>
            </div>
            <div class="col-span-1 space-x-1">
              <span class="bg-white rounded-full w-3 h-3 inline-block" v-for="item in 4" :key="item"></span>
            </div>
            <div class="col-span-1 space-x-1">
              <span class="bg-white rounded-full w-3 h-3 inline-block" v-for="item in 4" :key="item"></span>
            </div>
            <div class="col-span-1">{{activeCard.last4}}</div>
          </div>
        </div>
        <div class="card-exp grid grid-cols-3 mt-5">
          <div class="col-span-1 text-13">Thru: {{activeCard.exp}}</div>
          <div class="col-span-1 text-13 flex">
            <p>CVV:</p>
            <span class="text-26 ml-1 -mt-1">***</span>
            </div>
        </div>
        <div class="type-card flex justify-end">
          <img src="@/assets/icons/Visa Logo.svg" alt="aspire">
        </div>
      </div>
    </div>
    <div class="next-card flex justify-center p-4 space-x-1">
      <span
        v-for="(card,index) in cards" :key="index"
        :class="{'current-card h-3 inline-block rounded-lg bg-success cursor-pointer' : true,
          'w-5': card.card_id === activeCard.card_id, 'w-3 opacity-20': activeCard.card_id !== card.card_id }"
        @click="getActiveCard(card)">
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomerCards',
  components: {
  },
  data: () => {
    return {
      activeCard: null
    };
  },
  props: {
    cards: {
      type: [Array]
    }
  },
  watch: {
    cards:{
      handler(){
        this.activeCard = this.cards[0];
        this.$emit('currentCard', this.activeCard);
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {
    getActiveCard(card) {
      this.activeCard = card;
      this.$emit('currentCard', this.activeCard)
    }
  }
}
</script>
<style lang="scss" scoped>
 .show-card {
  position: absolute;
  top: -30px;
  right: 0;
 }
</style>
