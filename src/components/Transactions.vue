<template>
  <div class="card-details">
    <div class="border rounded-lg">
      <div class="p-5 bg-secondary header flex items-center justify-between aspire-shadow-inner rounded-lg cursor-pointer" 
        @click="isTransactionsActive=!isTransactionsActive">
        <div class="left-title flex items-center">
          <img src="@/assets/icons/Group 11889-1.svg" svg-inline>
          <p class="text-base ml-2">Recent Transactions</p>
        </div>
        <img src="@/assets/icons/down-arrow.svg" svg-inline>
      </div>
      <div v-if="isTransactionsActive">
        <div class="card-contents px-8 pt-4">
          <div class="flex flex-col w-full py-4" :class="(index < transactions.length-1)?'border-b':''" v-for="(transaction, index) in transactions" :key="index">
            <div class="flex flex-row justify-between cursor-pointer">
              <div class="flex flex-row items-center">
                <div :id="'transaction'+index" class="p-5 rounded-full">
                  <img :id="index" :src="getImgUrl(transaction.icon)" @load="getPalette(index)">
                </div>
                <div class="flex flex-col ml-5">
                  <p class="text-base font-semibold">{{transaction.name}}</p>
                  <span class="opacity-30 text-13">{{transaction.date}}</span>
                  <div class="flex items-center mt-2">
                    <div class="p-2 bg-primary rounded-3xl">
                      <img src="@/assets/icons/business-and-finance.svg" svg-inline>
                    </div>
                    <p class="text-xs text-primary font-semibold ml-2">{{transaction.des}}</p>
                  </div>
                </div>
              </div>
              <div class="amount flex flex-row items-center">
                <p class="font-bold" :class="(transaction.transactionType === 'credit')?'text-success':''">
                  {{(transaction.transactionType === 'credit')?'+':''}}
                  {{transaction.amount}}
                </p>
                <img src="@/assets/icons/next.svg" svg-inline class="ml-2">
              </div>
            </div>
          </div>
        </div>
        <el-button type="success" plain class="w-full" v-if="transactions.length>3">View all card transactions</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vibrant from 'node-vibrant'
export default {
  name: 'TransactionList',
  components: {
  },
  data: () => {
    return {
      isTransactionsActive: true
    };
  },
  props: {
    transactions: {
      type: [Array],
      required: true,
    },
  },
  methods: {
    getImgUrl(icon) {
      return require('@/assets/icons/'+icon+'.svg')
    },
    getPalette(index) {
      const img = document.getElementById(index);
      const divEl = document.getElementById('transaction'+index);
      const vibrant = new Vibrant(img);
      vibrant.getPalette().then(
        (palette) => {
          divEl.style.background = `rgba(${palette.LightMuted.getRgb().join(',')}, 0.1)`;
        },
        (reason) => {
          console.error('dd',reason)
        }
      )
    }
  }
}
</script>
