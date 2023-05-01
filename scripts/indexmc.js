"use strict"; 
console.log("the index.js has begun executing"); 

function calculatebtn (){
    let loanAmount= document.getElementById("loanAmount").value; 
    let interestRate= document.getElementById("interestRate").value; 
    let loanTerm= document.getElementById("loanTerm").value; 

}

//monthly payment calculation

let montlyInterestRate= (interestRate/100)/12; 
let numberOfPayment = loanTerm * 12; 
let numerator = montlyInterestRate * (1 + montlyInterestRate )**numberOfPayments; 
let denominator = (1 + montlyInterestRate)**numberOfPayments -1; 
let monthlyPayment = loanAmount * (numerator / denominator); 


//total interest paid over the life of the loan 
let totalInterest = (monthlyPayment * numberOfPayments) - loanAmount; 

//output format
monthlyPayment=monthlyPayment.toFixed(2); 
totalInterest = totalInterest.toFixed(2); 

//Results 

console.log("Monthly Payment: $"  + monthlyPayment); 
console.log("Total Interest: $" + totalInterest); 

