class CreditCard {
    constructor(number, expiryMonth, expiryYear, limitAmount, interestRate, clientId) {
      this.number = number;
      this.expiryMonth = expiryMonth;
      this.expiryYear = expiryYear;
      this.limitAmount = limitAmount;
      this.interestRate = interestRate;
      this.clientId = clientId;
    }
  }
  
  export default CreditCard;