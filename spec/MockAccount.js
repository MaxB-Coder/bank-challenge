class MockAccount {
  #transactions = [{ Date: '14/01/2012', Amount: '500.00', Type: 'withdrawal' }, { Date: '13/01/2012', Amount: '2000.00', Type: 'deposit' }, { Date: '10/01/2012', Amount: '1000.00', Type: 'deposit' }];

  #balanceHistory = [2500, 3000, 1000];

  #balance;

  addTransaction(Transaction) {
    this.depositChecker(Transaction);
    this.withdrawalChecker(Transaction);
    this.#transactions = [Transaction, ...this.#transactions];
  }

  depositChecker(Transaction) {
    if (Transaction.Type === 'deposit') {
      this.#balance += parseInt(Transaction.Amount);
      this.#balanceHistory = [this.#balance, ...this.#balanceHistory];
    }
  }

  withdrawalChecker(Transaction) {
    if (Transaction.Type === 'withdrawal') {
      this.#balance -= parseInt(Transaction.Amount);
      this.#balanceHistory = [this.#balance, ...this.#balanceHistory];
    }
  }

  getTransactions() {
    return this.#transactions;
  }

  setTransactions(array) {
    this.#transactions = array;
  }

  getBalance() {
    return this.#balance;
  }

  setBalance(number) {
    this.#balance = number;
  }

  getBalanceHistory() {
    return this.#balanceHistory;
  }
}

export default MockAccount;
