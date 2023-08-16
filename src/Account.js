class Account {
  #transactions = [];

  #balance = 0;

  #balanceHistory = [];

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

  setTransactions(array) {
    this.#transactions = array;
  }

  getTransactions() {
    return this.#transactions;
  }

  setBalance(number) {
    this.#balance = number;
  }

  getBalance() {
    return this.#balance;
  }

  getBalanceHistory() {
    return this.#balanceHistory;
  }
}

export default Account;
