const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const calculateBtn = document.querySelector('#calculateBtn');
const totalAmount = document.querySelector('#total');


calculateBtn.addEventListener('click', function() {
    const billValue = parseFloat(bill.value);
    const tipValue = parseFloat(tip.value);

        if (isNaN(billValue) || billValue <= 0) {
        totalAmount.textContent = "Please enter a valid bill amount";
        totalAmount.style.color = "red";
        return;

    }


    const tipAmount = billValue * tipValue;
    const total = billValue + tipAmount;




   totalAmount.style.color = "white"; 
   totalAmount.textContent = `Total: ${total.toFixed(2)}`;


});
