let currentBalance = document.querySelector(".current-balance");
let balance = 0;


function addTransaction(){

    let description = document.querySelector(".description");
    let getDescription = description.value;

    let transaction = document.querySelector(".Transactions");
    let newTransaction = document.createElement("li"); 
    newTransaction.textContent = getDescription;
    transaction.appendChild(newTransaction);



   let amount = document.querySelector(".amount");
    let getAmount = amount.value;
    let amountNumber = parseFloat(getAmount);
    console.log(typeof amountNumber);

   

    let amountItems = document.querySelector(".amount-items");
    let newAmountItems = document.createElement("li"); 
    newAmountItems.textContent = `$${getAmount}`;
    amountItems.appendChild(newAmountItems);


  if (getAmount === "" || isNaN(amountNumber)) {
        alert("Please enter a valid number.");
            newAmountItems.textContent = "";

        return;
    }
   if (amountNumber < 0) {
    newAmountItems.style.color = "red";
  }

        balance += amountNumber;

   
    document.querySelector(".balance").textContent = `${balance}`;


    if(getAmount.trim() !== ""){
                  amount.value ="";
       }
       if(getDescription.trim() !== ""){
        description.value ="";
    }


}