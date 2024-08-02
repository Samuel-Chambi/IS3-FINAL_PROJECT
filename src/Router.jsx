import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreditCardList from './ui/components/CreditCardList';
import CreditCardDetail from './ui/components/CreditCardDetail';
import BankAccountList from './ui/components/BankAccountList';
import BankAccountDatail from './ui/components/BankAccountList';
import Home from './ui/components/Home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/credit-cards" component={CreditCardList} />
        <Route exact path="/credit-cards/:id" component={CreditCardDetail} />
        <Route exact path="/bank-accounts" component={BankAccountList} />
        <Route exact path="/bank-accounts/:clientId" component={BankAccountDatail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
