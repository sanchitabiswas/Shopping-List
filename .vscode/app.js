const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#button-cancel");
const confirmBtn = document.querySelector("#button-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0 ;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
    };

    function presentAlert() {
        const alert = document.createElement('ion-alert');
        
        alert.header = 'Alert : Invalid Input';
        alert.message = 'Please input a valid Item and amount !';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
      }
confirmBtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
   if(
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <=0
     )

    {
        presentAlert();      
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': Rs. ' + enteredAmount;

    expensesList.appendChild(newItem)
    totalExpenses += Number(enteredAmount);
    totalExpensesOutput.textContent = totalExpenses;

    console.log(enteredReason ,enteredAmount);
    clear();
});

cancelBtn.addEventListener('click',clear);

