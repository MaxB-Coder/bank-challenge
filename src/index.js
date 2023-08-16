import Account from './Account.js';
import StatementPrinter from './StatementPrinter.js';
import Transaction from './Transaction.js';

const Transaction1 = new Transaction('10/01/2012', 1000, 'deposit');
const Transaction2 = new Transaction('13/01/2012', 2000, 'deposit');
const Transaction3 = new Transaction('14/01/2012', 500, 'withdrawal');

// console.log(Transaction1.getTransaction());
// console.log(Transaction2.getTransaction());
// console.log(Transaction3.getTransaction());

const Account1 = new Account();
Account1.addTransaction(Transaction1.getTransaction());
Account1.addTransaction(Transaction2.getTransaction());
Account1.addTransaction(Transaction3.getTransaction());

// console.log(Account1.getBalanceHistory());

StatementPrinter.print(Account1);
