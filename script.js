const billEl = document.querySelector("#bill");
const submitEl = document.querySelector("#submit");
const tipEl = document.querySelector("#tip-amount");
const totalEl = document.querySelector("#new-total");
const percentEl = document.querySelector("#tip-percent");

let tip = 0;
let newTotal = 0;

function tipAmount (bill, percent){
    tip = (percent * bill) / 100;
    return tip;
}

function totalNew(bill, tip){
    newTotal = parseFloat(bill) + parseFloat(tip);
    return newTotal;
}

submitEl.addEventListener("click", function(event){
  event.preventDefault();
  let bill = billEl.value;
    console.log(bill);
    let percent = percentEl.value;
    console.log(percent);
    tipAmount(bill, percent);
    totalNew(bill, tip);
    console.log(tip);
    console.log(newTotal);
    tipEl.textContent = tip;
    totalEl.textContent = newTotal;

})

