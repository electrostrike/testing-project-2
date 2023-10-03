// Sample test usage
// test('2 + 2 = 4', () => {
//    expect(2 + 2).toBe(4);
// })

const BankAccount = require('./bankAccount.js');

// test('Initialize a bank account', () => {
//     const myBankAccount = new BankAccount('Self', 100);
//     expect(myBankAccount).toBeDefined();
// })

test('T1: display balance 100', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('display')).toBe(100);
})

test('T2: deposit amount -50 balance 100', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('deposit', -50)).toMatch(/Error/);
})

test('T3: deposit amount 50 balance 100', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('deposit', 50)).toBe(150);
})

test('T4: withdraw amount 150 balance 100', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('withdraw', 150)).toMatch(/Error/);
})

test('T5: deposit amount 50 balance 100', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('withdraw', 50)).toBe(50);
})

test('T6: transfer', () => {
    const myBankAccount = new BankAccount('Self', 100);
    expect(myBankAccount.transaction('transfer')).toMatch(/Error/);
})

