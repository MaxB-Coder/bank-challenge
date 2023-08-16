class Transaction {
  #date;

  #amount;

  #transactionType;

  constructor(date = new Date().toLocaleDateString('en-GB'), amount, type = '') {
    this.#date = date;
    this.#amount = amount;
    this.#transactionType = type.toLowerCase();
  }

  getDate() {
    return this.#date;
  }

  getTransactionType() {
    return this.#transactionType;
  }

  getAmount() {
    return this.#amount;
  }

  getTransaction() {
    return {
      Date: this.#date,
      Amount: this.#amount.toFixed(2),
      Type: this.#transactionType,
    };
  }
}

export default Transaction;
