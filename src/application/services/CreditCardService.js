import CreditCardRepository from '../../infraestructure/repositories/CreditCardRepository';

const CreditCardService = {
  async fetchCreditCards() {
    return await CreditCardRepository.getAll();
  },
  async fetchCreditCard(id) {
    return await CreditCardRepository.getById(id);
  },
};

export default CreditCardService;