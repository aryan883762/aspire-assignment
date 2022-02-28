<template>
  <div class="cards-view">
    <img src="@/assets/icons/logo_mobile_color.svg" class="mobile-top-logo absolute hidden" svg-inline/>
    <div class="card-header flex flex-col space-y-2 mb-4 mobile-bg mobile-text-white mobile-padding">
      <p class="text-sm">Available Balance</p>
      <div class="flex flex-row justify-between items-center">
        <div class="flex items-center space-x-2">
          <span class="bg-success p-1 px-4 rounded-lg text-white text-13">$$</span>
          <span class="text-26 font-semibold">3,000</span>
        </div>
        <el-button type="primary" icon="el-icon-circle-plus" class="desktop-el" @click="showDialog()">New card</el-button>
        <div class="flex items-center cursor-pointer text-info mobile-el" @click="showDialog()">
          <img src="@/assets/icons/box.svg" svg-inline/>
          <span class="ml-2">New card</span>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="My debit cards" name="mydebit">
        <div class="tab-container aspire-shadow rounded-lg p-12 pt-16 w-full">
          <div class="grid grid-cols-12 xl:space-x-16 space-x-0">
            <div class="flex flex-col xl:col-span-6 col-span-12 mobile-bg">
              <div class="card card-padding">
                <CustomerCards :cards="cards" @currentCard="getCurrentCard"></CustomerCards>
              </div>
              <div class="card-action my-5">
                <CardAction :active_card="activeCard" @onCardUpdate="onCardUpdate"></CardAction>
              </div>
            </div>
            <div class="flex flex-col xl:col-span-6 col-span-12 space-y-5 mobile-padding">
              <div class="card-details">
                <CardDetails :active_card="activeCard"></CardDetails>
              </div>
              <div class="transactions">
                <TransactionList :transactions="transactions"></TransactionList>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="All company cards" name="all">
        <div class="aspire-shadow rounded-lg p-6 w-full">
          All company cards
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="Add new card"
      :visible.sync="dialogVisible"
      width="50%">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <el-input v-model="card.holder" 
            type="text"
            size="small"
            name="card name"
            placeholder="Name on card"
            v-validate="'required'"
            data-vv-as="Name on card"
            data-vv-validate-on="blur"
            :danger="!!errors.first('card name')"
            :danger-text="errors.first('card name')">
          </el-input>
          <small class="text-danger my-2" v-if="!!errors.first('card name')"> 
            {{errors.first('card name')}}
          </small>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addNewCard()">Add card</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CustomerCards from '@/components/CustomerCards.vue';
import CardAction from '@/components/CardActions.vue';
import CardDetails from '@/components/CardDetails.vue';
import TransactionList from '@/components/Transactions.vue';
import CardMixin from '@/mixins/CardMixin';
import ErrorHandlingMixin from '@/mixins/ErrorHandlingMixin';

export default {
  name: 'CardsView',
  components: {
    CustomerCards,
    CardAction,
    CardDetails,
    TransactionList
  },
  mixins: [ CardMixin, ErrorHandlingMixin],
  data() {
    return {
      activeName: 'mydebit',
      cards: [],
      transactions: [],
      activeCard: {},
      dialogVisible: false,
      card: {
        holder: '',
        exp: null,
        card_number: null,
        last4: null,
        isFreeze: false
      }
    };
  },
  mounted() {
    this.getCards();
    this.getTransactions();
  },
  methods: {
    getCards() {
      this.fetchCards().then((data)=>{
        this.cards = data;
      }, err => console.error(err))
    },
    getTransactions() {
      this.fetchTransactions().then((data)=>{
        this.transactions = data;
      }, err => console.error(err))
    },
    getCurrentCard(card) {
      this.activeCard = card;
    },
    onCardUpdate(e) {
      console.log('e', e)
      this.getCards();
    },
    addNewCard() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.addCard(this.card).then((res) => {
            this.getCards();
            this.$message({
              type: 'success',
              message: res.msg
            });
            this.dialogVisible = false;
          },err => console.error(err))
        } else {
          console.log(valid)
        }
      })
    },
    showDialog() {
      this.dialogVisible = true;
      this.card = {};
    }
  }
}
</script>
