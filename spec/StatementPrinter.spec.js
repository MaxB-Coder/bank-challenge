import StatementPrinter from '../src/StatementPrinter.js';
import MockAccount from './MockAccount.js';

describe('Statement Printer Tests:', () => {
  // Mock or spyOn chalk to check that it is being called correctly within the statement printer tests.
  let actual; let expected; let
    consoleSpy;
  const Account = new MockAccount();

  beforeEach(() => {
    consoleSpy = spyOn(console, 'log');
  });

  afterEach(() => {
    actual = undefined;
    expected = undefined;
    consoleSpy = undefined;
  });

  it('Should check that the account statement has the correct header.', () => {
    // Arrange
    expected = 'date       || credit  || debit  || balance';

    // Act
    actual = StatementPrinter.header;

    // Assert
    expect(actual).toEqual(expected);
  });

  it('Should call console.log the number of times the length of the array of strings is (+1 for the header).', () => {
    // Arrange
    // Act
    StatementPrinter.print(Account);
    // Assert
    expect(consoleSpy).toHaveBeenCalledTimes((Account.getTransactions().length) + 1);
  });

  it('Should check that the printer logs to the console.', () => {
    // Arrange
    // Act
    actual = StatementPrinter.print(Account);
    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(console.log(actual));
  });

  it('Should check that printed statements follow the correct method path in the correct order.', () => {
    // Arrange
    const printSpy = spyOn(StatementPrinter, 'print').and.callThrough();
    const processAccountSpy = spyOn(StatementPrinter, 'processAccount').and.callThrough();
    const printAccountSpy = spyOn(StatementPrinter, 'printAccount').and.callThrough();
    const printTransactionSpy = spyOn(StatementPrinter, 'printTransaction').and.callThrough();
    const processTypeCreditSpy = spyOn(StatementPrinter, 'processTypeCredit').and.callThrough();
    const processTypeDebitSpy = spyOn(StatementPrinter, 'processTypeDebit').and.callThrough();
    const balanceFormatterSpy = spyOn(StatementPrinter, 'balanceFormatter').and.callThrough();

    // Act
    StatementPrinter.print(Account);
    // Assert
    expect(printSpy).toHaveBeenCalledBefore(processAccountSpy);
    expect(processAccountSpy).toHaveBeenCalledBefore(printAccountSpy);
    expect(printAccountSpy).toHaveBeenCalledBefore(printTransactionSpy);
    expect(printTransactionSpy).toHaveBeenCalled();
    expect(processTypeCreditSpy).toHaveBeenCalled();
    expect(processTypeDebitSpy).toHaveBeenCalled();
    expect(balanceFormatterSpy).toHaveBeenCalled();
  });

  it('Should check that the print method calls the correct method from the account.', () => {
    // Arrange
    const getTransactionsSpy = spyOn(Account, 'getTransactions').and.callThrough();
    // Act
    StatementPrinter.print(Account);
    // Assert
    expect(getTransactionsSpy).toHaveBeenCalled();
  });
  it('Should check that the print method calls the account.', () => {
    // Arrange
    const printSpy = spyOn(StatementPrinter, 'print').and.callThrough();
    // Act
    StatementPrinter.print(Account);
    // Assert
    expect(printSpy).toHaveBeenCalledWith(Account);
  });
});
