import BankAccount from '../../domain/entities/BankAccount.js';
import { mockBankAccounts } from './mockBankAccounts.js';
// import axios from 'axios';


// const apiClient = axios.create({
//   baseURL: 'http://localhost:8093/api',
// });

const BankAccountRepository = {
  async getAll() {
    // const response = await apiClient.get('/credit-cards');
    // return response.data.map(card => new CreditCard(card.number, card.expiryMonth, card.expiryYear, card.limitAmount, card.interestRate, card.clientId));
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBankAccounts.map(account => new BankAccount(
      account.id,
      account.type,
      account.balance,
      account.monthlyOperationsLimit,
      account.monthlyMaintenanceFee,
      account.clientId
    ));
  },
  async getAllByClientId(clientId) {
    return mockBankAccounts
      .filter(account => account.clientId === parseInt(clientId, 10))
      .map(account => 
        new BankAccount(
          account.id,
          account.type,
          account.balance,
          account.monthlyOperationsLimit,
          account.monthlyMaintenanceFee
        )
      );
    // try {
    //   const response = await apiClient.get(`/api/bank_accounts/${clientId}`);
    //   return response.data.map(account => 
    //     new BankAccount(
    //       account.id,
    //       account.type,
    //       account.balance,
    //       account.monthlyOperationsLimit,
    //       account.monthlyMaintenanceFee
    //     )
    //   );
    // } catch (error) {
    //   console.error('Error fetching bank accounts:', error);
    //   throw error;
    // }
  }
}

export default BankAccountRepository;