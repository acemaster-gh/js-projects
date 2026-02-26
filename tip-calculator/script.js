const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const calculateBtn = document.querySelector('#calculateBtn');
const totalAmount = document.querySelector('#total');
const container = document.querySelector('.container');


calculateBtn.addEventListener('click', function() {
    const billValue = parseFloat(bill.value);
    const tipValue = parseFloat(tip.value);
    const tipAmount = billValue * tipValue
    const total = billValue + tipAmount;


    if (isNaN(billValue) || billValue <= 0) {
        totalAmount.textContent = "Please enter a valid bill amount";
        totalAmount.style.color = "red";
        return;

        
    }


   totalAmount.style.color = "white"; 
   totalAmount.textContent = `Total: ${total.toFixed(2)}`;


});
