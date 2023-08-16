class StatementPrinter {
  static account = [];

  static balanceHistory;

  static green = '\x1b[32m';

  static red = '\x1b[31m';

  static header = 'date       || credit  || debit  || balance';

  static print(Account) {
    this.processAccount(Account);
    console.log(this.header);
    this.printAccount();
  }

  static processAccount(Account) {
    this.account = Account.getTransactions();
    this.balanceHistory = Account.getBalanceHistory();
  }

  static printAccount() {
    for (let i = 0; i < this.account.length; i++) {
      const transaction = this.account[i];
      const balanceCalculator = this.balanceHistory[i];
      this.printTransaction(transaction, balanceCalculator);
    }
  }

  static printTransaction(transaction, balanceCalculator) {
    const date = String(transaction.Date);
    const credit = this.processTypeCredit(transaction.Type, transaction.Amount).toString().padEnd(8, ' ');
    const debit = this.processTypeDebit(transaction.Type, transaction.Amount).toString().padEnd(7, ' ');
    const statementBalance = this.balanceFormatter(balanceCalculator.toFixed(2));
    console.log(`${date.padEnd(11, ' ')}|| \x1b[32m${credit}\x1b[0m|| \x1b[31m${debit}\x1b[0m|| ${statementBalance}`);
  }

  static processTypeCredit(Type, Amount) {
    if (Type === 'deposit') {
      return parseInt(Amount).toFixed(2);
    }
    return '';
  }

  static processTypeDebit(Type, Amount) {
    if (Type === 'withdrawal') {
      return parseInt(Amount).toFixed(2);
    }
    return '';
  }

  static balanceFormatter(statementBalance) {
    if (statementBalance < 0) {
      return `\x1b[31m${statementBalance}\x1b[0m`;
    }
    return `\x1b[32m${statementBalance}\x1b[0m`;
  }
}

export default StatementPrinter;
