import { cardList } from '@/store/data/cards.json'
import { transactionList } from '@/store/data/transactions.json'

export default {
  created() {
    this.initializeData();
  },
  mounted() {
    this.initializeData();
  },
  methods: {
    initializeData() {
      const cards = JSON.parse(this.$storage.getItem('cards'));
      if(!cards) {
        this.$storage.setItem('cards', JSON.stringify(cardList));
      }
      this.$storage.setItem('transactions', JSON.stringify(transactionList));
    },
    addCard(card) {
      let cardList = JSON.parse(this.$storage.getItem('cards'));
      const countCard = cardList.length;
      card['card_number'] = this.$helpers.randomCardNumber(16);
      card['card_id'] = card['card_number'];
      card['exp'] = this.$moment(this.$helpers.randomDate()).format('MM/YYYY');
      card['last4'] = card['card_number'].substr(-4);
      console.log('data', cardList, countCard)
      return new Promise((resolve, reject) => {
          if (countCard) {
            cardList = [...cardList, card];
            this.$storage.setItem('cards', JSON.stringify(cardList));
            resolve({isFreeze: true, msg: 'Card added successfully!'})
          } else {
            reject({isFreeze: false, msg:'Something went wrong'})
          }
      })
    },
    fetchCards() {
      return new Promise((resolve, reject) => {
      const cardList = JSON.parse(this.$storage.getItem('cards'))
        if (cardList) {
          resolve(cardList)
        } else {
          reject('No result found')
        }
      })
    },
    fetchTransactions() {
      return new Promise((resolve, reject) => {
      const transactionList = JSON.parse(this.$storage.getItem('transactions'))
        if (transactionList) {
          resolve(transactionList)
        } else {
          reject('No result found')
        }
      })
    },
    changeCardStatus(card_id) {
      return new Promise((resolve, reject) => {
        const cardList = JSON.parse(this.$storage.getItem('cards'));
        let indexFound = -1;
        let card_arr = [];
          if (cardList.length) {
            let cardRes = cardList.filter((card, index)=> {
              if(card.card_id !== card_id) {
                return card;
              }else {
                indexFound = index;
              }
            });
            console.log('index', indexFound)
            if(indexFound>-1) {
              let dataFound = cardList[indexFound];
              dataFound['isFreeze'] = !cardList[indexFound]['isFreeze'] ;
              card_arr = [dataFound, ...cardRes]
            }
            this.$storage.setItem('cards', JSON.stringify(card_arr));
            resolve('Card updated successfully!')
          } else {
            reject('No result found')
          }
      })
    },
    removeCard(card_id) {
      return new Promise((resolve, reject) => {
        const cardList = JSON.parse(this.$storage.getItem('cards'));
          if (cardList.length) {
            let cardRes = cardList.filter((card)=> {
              if(card.card_id !== card_id) {
                return card;
              }
            });
            if(cardRes.length>0) {
              this.$storage.setItem('cards', JSON.stringify(cardRes));
              resolve('Card removed successfully!')
            } else {
              reject({ isFreeze: false, msg: 'Can\'t delete! Default card.' })
            }
          } else {
            reject({ isFreeze: true, msg: 'No result found' })
          }
      })
    }
  }
};