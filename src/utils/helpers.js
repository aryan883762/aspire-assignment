
export default {

  randomDate(start = new Date(2002,0,1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },

  randomCardNumber(digit) {
    return Math.random().toFixed(digit).split('.')[1]
  }
  
}
