// src/application/services/BankAccountService.js
import BankAccountRepository from '../../infraestructure/repositories/BankAccountRepository';

const BankAccountService = {
  async fetchBankAccounts() {
    try {
      return await BankAccountRepository.getAll();
    } catch (error) {
      console.error('Error fetching bank accounts:', error);
      throw error;
    }
  },

  async fetchBankAccountById(id) {
    try {
      return await BankAccountRepository.getById(id);
    } catch (error) {
      console.error(`Error fetching bank account with id ${id}:`, error);
      throw error;
    }
  },
};

export default BankAccountService;
