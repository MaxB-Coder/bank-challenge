class mockTransaction {
  date;

  amount;

  transactionType;

  constructor(date = new Date().toLocaleDateString('en-GB'), amount, type = '') {
    this.date = date;
    this.amount = amount;
    this.transactionType = type;
  }

  getAmount() {
    return this.amount;
  }

  getTransactionType() {
    return this.transactionType;
  }

  getTransaction() {
    return {
      Date: this.date,
      Amount: this.amount.toFixed(2),
      Type: this.transactionType,
    };
  }
}

export default mockTransaction;
