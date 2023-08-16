import Transaction from '../src/Transaction.js';

describe('Transaction Tests:', () => {
  describe('Transaction Instantiation Tests,', () => {
    let expected; let actual; let
      testTransaction;

    beforeEach(() => {
      testTransaction = new Transaction();
    });

    afterEach(() => {
      expected = undefined;
      actual = undefined;
      testTransaction = undefined;
    });

    it('Should check that transactions can be created with a date, amount and type.', () => {
      // Arrange
      testTransaction = new Transaction('01/01/2000', 100, 'deposit');
      expected = { Date: '01/01/2000', Amount: '100.00', Type: 'deposit' };

      // Act
      actual = testTransaction.getTransaction();

      // Assert
      expect(actual).toEqual(expected);
    });

    it('Should check that the date of a transaction can be returned.', () => {
      // Arrange
      testTransaction = new Transaction('01/01/2000', 100, 'deposit');
      expected = '01/01/2000';

      // Act
      actual = testTransaction.getDate();

      // Assert
      expect(actual).toEqual(expected);
    });

    it('Should check that the transaction type case is normalised to lower case for correct processing.', () => {
      // Arrange
      testTransaction = new Transaction('01/01/2000', 100, 'DEPOSIT');
      expected = 'deposit';

      // Act
      actual = testTransaction.getTransactionType();

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
