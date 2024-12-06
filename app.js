let bill_amount = document.getElementById('billAmount');
let percentage_tip = document.getElementById('percentageTip');
let tip_amount = document.getElementById('tipAmount');
let totalamount = document.getElementById('totalAmount');
let ErrorMessage = document.getElementById('errorMessage');

function calculatetip() {
    if (bill_amount.value === ""){
        ErrorMessage.textContent = "Please Enter a Valid Input";
        ErrorMessage.style.color = "red";
    }
    else if (percentage_tip.value === ""){
        ErrorMessage.textContent = "Please Enter a Valid Input";
        ErrorMessage.style.color = "red";
    }
    else if (bill_amount.value === "" && percentage_tip.value === ""){
        ErrorMessage.textContent = "Please Enter a Valid Input";
        ErrorMessage.style.color = "red";
    }
    else {
        let bill_Amount = parseInt(bill_amount.value);
        let Percentage_Tip = parseInt(percentage_tip.value);
        let calculateTip = (Percentage_Tip / 100) * bill_Amount;
        let totalbill = bill_Amount + calculateTip;
        tip_amount.value = calculateTip;
        totalamount.value = totalbill;
        ErrorMessage.textContent = "";
        
    }
    
}