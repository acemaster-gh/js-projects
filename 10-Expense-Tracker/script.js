//1. STATE
const state = {
    transactions: [],
}

//2. DOM SELECTORS

const DOM = {
totalIncome : document.querySelector('#total-income'),
totalExpense : document.querySelector('#total-expense'),
balanceAmount: document.querySelector('#balance'),
amountDescription: document.querySelector('#description'),
amountValue : document.querySelector('#amount'),
addBtn: document.querySelector('#add-btn'),
transactionList : document.querySelector('#transaction-list'),
transactionType:document.querySelector('input[name="type"]:checked'),
incomeRadio:document.querySelector('#income-radio'),
expenseRadio:document.querySelector('#expense-radio'),
}


//3. RENDER FUNCTION    

function render() {
    
}