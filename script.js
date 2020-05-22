const billEl = document.querySelector("#bill");
const submitEl = document.querySelector("#submit");
const tipEl = document.querySelector("#tip-amount");
const totalEl = document.querySelector("#new-total");
const percentEl = document.querySelector("#tip-percent");
const twoSplit = document.querySelector("#twoSplit");
const threeSplit = document.querySelector("#threeSplit");
const moreSplit = document.querySelector("#moreSplit");
const form = document.querySelector("#form");

let tip = 0;
let newTotal = 0;
let eachSplit = 0;

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

function splitTotal(num){
    eachSplit = newTotal / num;
    // console.log(eachSplit);
    const splitField = document.querySelector("#split");
    let html = "";  
    for (let i=0; i<num; i++){ 
         html+= `<h4>${i+1}-split: ${eachSplit.toFixed(2)}</h4>  `;
        console.log(html);
    }
    splitField.innerHTML = html;
}

moreSplit.addEventListener("click", function(event){
    event.preventDefault();
    const numberSplit = document.querySelector("#numberSplit");
    const sp = numberSplit.value;
    splitTotal(sp);
})