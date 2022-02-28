<template>
  <div class="bg-secondary rounded-2xl grid grid-cols-5 space-x-4 p-5 text-13">
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center cursor-pointer" @click="updateCardStatus()">
        <img src="@/assets/icons/Freeze card.svg" >
        <p class="text-center">{{active_card.isFreeze?'Unfreeze': 'Freeze'}} card</p>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center cursor-pointer">
        <img src="@/assets/icons/Set spend limit.svg" svg-inline>
        <p class="text-center">Set spend limit</p>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center cursor-pointer">
        <img src="@/assets/icons/GPay.svg" svg-inline>
        <p class="text-center">Add to GPay</p>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center cursor-pointer">
        <img src="@/assets/icons/Replace card.svg" svg-inline>
        <p class="text-center">Replace card</p>
      </div>
    </div>
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center cursor-pointer" @click="confirmation()">
        <img src="@/assets/icons/Deactivate card.svg" svg-inline>
        <p class="text-center">Cancel card</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardMixin from "@/mixins/CardMixin";
export default {
  name: 'CardAction',
  components: {
  },
  mixins: [CardMixin],
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {
    active_card: {
      type: Object,
      require: true
    }
  },
  methods: {
    updateCardStatus() {
      const vm = this;
      this.changeCardStatus(this.active_card['card_id']).then((res) => {
        this.$message({
          type: 'success',
          message: res
        });
        vm.$emit('onCardUpdate', res);
      }, err => console.error(err))
    },
    cancelCard() {
      this.removeCard(this.active_card['card_id']).then((res) => {
        const vm = this;
        this.$message({
          type: 'success',
          message: 'Deleted successfully!'
        });
        vm.$emit('onCardUpdate', res);
      }, err => {
        if(err.isFreeze === false){
          this.$message({
            type: 'error',
            message: err.msg
          });
        }
        console.error(err)
        }
      )
    },
    confirmation() {
      this.$confirm('Are you sure you want to delete this card?', 'Confirmation', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        this.cancelCard();
      });
    }
  }
}
</script>
