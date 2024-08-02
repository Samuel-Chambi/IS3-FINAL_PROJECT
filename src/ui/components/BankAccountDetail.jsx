// src/ui/components/BankAccountDetail.js
import { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import BankAccountService from '../../application/services/BankAccountService';
import { useParams } from 'react-router-dom';

const BankAccountDetail = () => {
  const [bankAccount, setBankAccount] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadBankAccount = async () => {
      try {
        const data = await BankAccountService.fetchBankAccountById(id);
        setBankAccount(data);
      } catch (error) {
        console.error('Error loading bank account details:', error);
      }
    };
    loadBankAccount();
  }, [id]);

  return (
    <div>
      {bankAccount ? (
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Detalles de la Cuenta Bancaria</CardTitle>
              <CardText>ID: {bankAccount.id}</CardText>
              <CardText>Tipo: {bankAccount.type}</CardText>
              <CardText>Saldo: ${bankAccount.balance.toFixed(2)}</CardText>
              <CardText>Límite de Operaciones Mensuales: {bankAccount.monthlyOperationsLimit}</CardText>
              <CardText>Cuota de Mantenimiento Mensual: ${bankAccount.monthlyMaintenanceFee.toFixed(2)}</CardText>
              <CardText>Client ID: {bankAccount.clientId}</CardText>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default BankAccountDetail;
