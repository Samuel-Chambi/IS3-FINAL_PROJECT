// src/ui/components/BankAccountList.js
import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import BankAccountService from '../../application/services/BankAccountService';

const BankAccountList = () => {
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    const loadBankAccounts = async () => {
      try {
        const data = await BankAccountService.fetchBankAccounts();
        setBankAccounts(data);
      } catch (error) {
        console.error('Error loading bank accounts:', error);
      }
    };
    loadBankAccounts();
  }, []);

  return (
    <div>
      <h1>Cuentas Bancarias</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Saldo</th>
            <th>Límite de Operaciones Mensuales</th>
            <th>Cuota de Mantenimiento Mensual</th>
            <th>Client ID</th>
          </tr>
        </thead>
        <tbody>
          {bankAccounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.type}</td>
              <td>{account.balance.toFixed(2)}</td>
              <td>{account.monthlyOperationsLimit}</td>
              <td>{account.monthlyMaintenanceFee.toFixed(2)}</td>
              <td>{account.clientId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BankAccountList;
