class BankAccount {
    constructor(id, type, balance, monthlyOperationsLimit, monthlyMaintenanceFee, clientId) {
      this.id = id;
      this.type = type;
      this.balance = balance;
      this.monthlyOperationsLimit = monthlyOperationsLimit;
      this.monthlyMaintenanceFee = monthlyMaintenanceFee;
      this.clientId = clientId;
    }
  }
  
  export default BankAccount;