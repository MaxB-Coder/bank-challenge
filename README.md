# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

1. Please install Jasmine (https://jasmine.github.io/pages/getting_started.html), the step by step process for this can be seen on the Jasmine website.
2. Add "type": "module" under "directories" in the package.JSON file. This will enable import and export.
3. "npm test" in the terminal will run the tests.
4. Finally index.js can be run from the terminal to print the test statement.
5. Feel free to add some commands and create your own statements!
   
### Requirements

* Results of your code should display via the JavaScript console.  (NB: You don't need to implement a command line interface that takes user input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory.

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

### User Story 1
As I user
I want to create transactions 
so that I can track my spending.

### Domain Model 1
```
| Objects      | Properties                         | Messages    | Outputs  |
| ------------ | ---------------------------------- | ----------- | -------- |
| Transaction  | transaction(@date, @amount, @type) |             |          |
```
### Tests 1
- [x] 1. Check that transactions can be created with a date, amount and type.
- [x] 2. Check that the date of a transaction can be returned.
- [x] 3. Check that the transaction details amount and type can be returned.
- [x] 4. Check that the date case is normalised to lower case for correct processing.

### User Story 2
As I user
I want to add these transactions to my account 
so that I have a record of my transaction.

### Domain Model 2 
```
| Objects      | Properties                        | Messages                    | Outputs  |
| ------------ | --------------------------------- | --------------------------- | -------- |
| Account      | Transactions @Array[@Transaction] | addTransaction(Transaction) | @Array   |
| Transaction  | Transaction (@number, @date)      |                             |          |
```
### Tests 2
- [x] 1. Check that specific transactions can be added to the transaction array.
- [x] 2. Check that additional transactions are added at the start of the list.

### User Story 3
As I user
I want to have a balance. 
so that I can track my spending.

### Domain Model 3
```
| Objects | Properties         | Messages          | Outputs  |
| ------- | ------------------ | ----------------- | -------- |
| Account | balance (@integer) | setTypeAndBalance |          |
```
### Tests 3
- [x] 1. Check that the balance updates positively when a positive (credit) transaction is added to the account.
- [x] 2. Check that the balance updates negatively when a negative (debit) transaction is added to the account.
- [x] 3. Check that the balance is updated in the balance history array.
   
### User Story 3
As I user
I want to print my account statement
so that I can collect all my transactions in one place.

### Domain Model 3 
```
| Objects          | Properties                        | Messages                    | Outputs        |
| ---------------- | --------------------------------- | --------------------------- | -------------- |
| StatementPrinter | statementTemplate (@String)       | print @Account.Transactions | @Console.log() |
| Account          | Transactions @Array[@Transaction] |                             |                |
```

### Tests 3
- [x] 1. Check that the account statement has the correct header.
- [x] 2. Check that console.log is called the number of times the length of the array of strings is (+1 for the header).
- [x] 3. Check that printed statements follow the correct method path in the correct order.
- [x] 4. Check that the print method calls the account.
  
### User Story 4
As I user
I want my account statement to be colour coded.
So that it is easier to read.

### Domain Model 4
```
| Objects          | Properties                        | Messages                    | Outputs        |
| ---------------- | --------------------------------- | --------------------------- | -------------- |
| StatementPrinter | statementTemplate (@String)       | print @Account.Transactions | @Console.log() |
| Account          | Transactions @Array[@Transaction] |                             |                |

*Should have used chalk for colours, I believe this would have made testing more doable. From testing with different input the colour feature works correctly.*

#### Standard
- [x] Meets the spec
- [x] Developed test-first
- [x] Passes tests and code is clean and well formatted
- [x] Encapsulates adding and storing Transactions in a class
- [x] Encapsulates Statement formatting in a class
- [x] Encapsulates Transaction data in a class

#### Extended
- [x] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))