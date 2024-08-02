import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import CreditCardService from '../../application/services/CreditCardService';

const CreditCardList = () => {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    const loadCreditCards = async () => {
      const data = await CreditCardService.fetchCreditCards();
      setCreditCards(data);
    };
    loadCreditCards();
  }, []);

  return (
    <div>
      <h1>Tarjetas de Crédito</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Número</th>
            <th>Mes de Expiración</th>
            <th>Año de Expiración</th>
            <th>Límite</th>
            <th>Tasa de Interés</th>
            <th>Client ID</th>
          </tr>
        </thead>
        <tbody>
          {creditCards.map((card) => (
            <tr key={card.number}>
              <td>{card.number}</td>
              <td>{card.expiryMonth}</td>
              <td>{card.expiryYear}</td>
              <td>{card.limitAmount}</td>
              <td>{card.interestRate}</td>
              <td>{card.clientId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CreditCardList;