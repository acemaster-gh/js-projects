//1. STATE
const state = {
  transactions: []
}

//2. DOM SELECTORS

const DOM = {
  totalIncome: document.querySelector('#total-income'),
  totalExpense: document.querySelector('#total-expense'),
  balanceAmount: document.querySelector('#balance'),
  amountDescription: document.querySelector('#description'),
  amountValue: document.querySelector('#amount'),
  addBtn: document.querySelector('#add-btn'),
  transactionList: document.querySelector('#transaction-list'),
  transactionType: document.querySelector('input[name="type"]:checked'),
  incomeRadio: document.querySelector('#income-radio'),
  expenseRadio: document.querySelector('#expense-radio')
}

//3. RENDER FUNCTION

function render () {
  //this only gets income transactions:
  const incomeTransactions = state.transactions.filter(function (t) {
    if (t.type === 'income') {
      return true
    } else {
      return false
    }
  })

  // shorthand way for the above is

  // const incomeTransactions = state.transactions.filter(t => t.type === 'income');

  //reduce adds them all up:

  const totalIncome = incomeTransactions.reduce(function (sum, t) {
    return sum + t.amount
  }, 0)

  //shorthand for the above
  // const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.amount, 0);
  // or

  //ALL CHAINED TOGETHER IN ONE LINE

  // const totalIncome = state.transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);

  //same way for the total expense

  const expenseTransactions = state.transactions.filter(function (t) {
    if (t.type === 'expense') {
      return true
    } else {
      return false
    }
  })
  const totalExpense = expenseTransactions.reduce(function (sum, t) {
    return sum + t.amount
  }, 0)

  // total balance
  const balance = totalIncome - totalExpense

  //updating DOM based on above

  DOM.totalIncome.textContent = `$${totalIncome}`;
  DOM.totalExpense.textContent = `$${totalExpense}`;
  DOM.balanceAmount.textContent = `$${balance}`;

  DOM.transactionList.innerHTML = ''
  state.transactions.forEach(t => {
    const li = document.createElement('li')
    li.textContent = `${t.description}: $${t.amount} (${t.type})`
    DOM.transactionList.appendChild(li)
  })
}


//EVENT LISTENER

DOM.addBtn.addEventListener('click', () => {

  const desc = DOM.amountDescription.value
  const amt = Number(DOM.amountValue.value) // Convert string to a number!
  const type = document.querySelector('input[name="type"]:checked').value


  state.transactions.push({ description: desc, amount: amt, type: type })


  render()
})
