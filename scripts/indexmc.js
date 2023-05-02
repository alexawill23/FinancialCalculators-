"use strict"; 

window.onload = init; 

function init(){
let calculatebtn = document.getElementById("calculatebtn");  
 calculatebtn.onclick = calculatebtnClicked; 

function calculatebtnClicked (){
    let loanAmount= document.getElementById("loanAmount").value; 
    let interestRate= document.getElementById("interestRate").value; 
    let loanTerm= document.getElementById("loanTerm").value; 



//monthly payment calculation

let montlyInterestRate= (interestRate/100)/12; 
let numberOfPayments = loanTerm * 12; 
let numerator = montlyInterestRate * (1 + montlyInterestRate )**numberOfPayments; 
let denominator = (1 + montlyInterestRate)**numberOfPayments -1; 
let monthlyPayment = loanAmount * (numerator / denominator); 


//total interest paid over the life of the loan 
let totalInterest = (monthlyPayment * numberOfPayments) - loanAmount; 

//output format
let outputField = document.getElementById("output"); 
monthlyPayment=monthlyPayment.toFixed(2); 
totalInterest = totalInterest.toFixed(2); 

//Results 
console.log("Monthly Payment: $"  + monthlyPayment); 
console.log("Total Interest: $" + totalInterest); 

}
}