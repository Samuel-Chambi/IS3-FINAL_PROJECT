// import axios from 'axios';
import CreditCard from '../../domain/entities/CreditCard.js';
import { mockCreditCards } from './mockCreditCards.js';

// const apiClient = axios.create({
//   baseURL: 'http://localhost:8093/api',
// });

const CreditCardRepository = {
  async getAll() {
    // const response = await apiClient.get('/credit-cards');
    // return response.data.map(card => new CreditCard(card.number, card.expiryMonth, card.expiryYear, card.limitAmount, card.interestRate, card.clientId));
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCreditCards.map(card => new CreditCard(card.number, card.expiryMonth, card.expiryYear, card.limitAmount, card.interestRate, card.clientId));
  
  },
  async getById(id) {
    // const response = await apiClient.get(`/credit-cards/${id}`);
    // const card = response.data;
    // return new CreditCard(card.number, card.expiryMonth, card.expiryYear, card.limitAmount, card.interestRate, card.clientId);
    const card = mockCreditCards.find(card => card.clientId === parseInt(id, 10));
    if (!card) {
      throw new Error('Credit card not found');
    }
    return new CreditCard(card.number, card.expiryMonth, card.expiryYear, card.limitAmount, card.interestRate, card.clientId);
  },
};

export default CreditCardRepository;