import Account from '../src/Account.js';
import mockTransaction from './MockTransaction.js';

describe('Account Tests:', () => {
  let expected; let actual; let testTransaction; let
    testAccount;

  beforeEach(() => {
    testTransaction = new mockTransaction('01/01/2000', 100.00, 'deposit');
    testAccount = new Account();
  });

  afterEach(() => {
    expected = undefined;
    actual = undefined;
    testTransaction = undefined;
    testAccount.setBalance(0);
    testAccount.setTransactions([]);
  });

  describe('Account Transaction List Tests,', () => {
    it('Should check that transactions can be added to the transaction array.', () => {
      // Arrange
      expected = [{ Date: '01/01/2000', Amount: '100.00', Type: 'deposit' }];

      // Act
      testAccount.addTransaction(testTransaction.getTransaction());
      actual = testAccount.getTransactions();

      // Assert
      expect(actual).toEqual(expected);
    });

    it('Should check that additional transactions are added at the start of the list.', () => {
      // Arrange
      testAccount.setTransactions([{ Date: '02/02/2000', Amount: '200.00', Type: 'deposit' }]);
      expected = [{ Date: '01/01/2000', Amount: '100.00', Type: 'deposit' }, { Date: '02/02/2000', Amount: '200.00', Type: 'deposit' }];

      // Act
      testAccount.addTransaction(testTransaction.getTransaction());
      actual = testAccount.getTransactions();

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('Balance Tests:', () => {
    it('Should check that the balance updates positively when a positive transaction (deposit) is added to the account.', () => {
      // Arrange
      testAccount.setBalance(0);
      expected = 100;

      // Act
      testAccount.addTransaction(testTransaction.getTransaction());
      actual = testAccount.getBalance();

      // Assert
      expect(actual).toEqual(expected);
    });

    it('Should check that the balance updates positively when a positive transaction (deposit) is added to the account.', () => {
      // Arrange
      expected = 100;

      // Act
      testAccount.addTransaction(testTransaction.getTransaction());
      actual = testAccount.getBalance();

      // Assert
      expect(actual).toEqual(expected);
    });

    it('Should check that the balance updates negatively when a negative transaction (withdrawal) is added to the account.', () => {
      // Arrange
      let testTransaction2 = new mockTransaction('01/01/2000', 100.00, 'withdrawal');
      testAccount.setBalance(200);
      expected = 100;

      // Act
      testAccount.addTransaction(testTransaction2.getTransaction());
      actual = testAccount.getBalance();

      // Assert
      expect(actual).toEqual(expected);

      // Clean Up
      testTransaction2 = undefined;
    });

    it('Should check that the balance is updated at the start of the balance history array. ', () => {
      // Arrange
      const testTransaction2 = new mockTransaction('01/01/2000', 200.00, 'deposit');
      expected = [300, 100];

      // Act
      testAccount.addTransaction(testTransaction.getTransaction());
      testAccount.addTransaction(testTransaction2.getTransaction());
      actual = testAccount.getBalanceHistory();

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
