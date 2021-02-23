"use strict";
const $ = selector => document.querySelector(selector);


function calculate() {
    var ans;

    let salary = document.getElementById("salary").value;
    let bills = document.getElementById("bills").value;
    let Interest = document.getElementById("Interest").value;
    let DownPayment = document.getElementById("dp").value;
    let term = document.getElementById("term").value;
    let n = term * 12;
    let i = (Interest/100)/12;
    let r = .29*salary;
    var inny = (1+i)**n;    

    ans = ((r*inny)-1)/(i*inny);

    ans = ans.toFixed(2);
    r = r.toFixed(2);

    if (isNaN(ans)) document.getElementById("result").innerHTML = "";
    else if (ans < 0) alert("invalid inputs");
    else {
        var result = ans.toString();
        document.getElementById("result").innerHTML = "House Price: $ " + result;
        var monthly = r.toString();
        document.getElementById("monthly").innerHTML = "Monthly Rent: $ " + monthly;
    }

    if (isNaN(salary))
        alert("Please enter a valid salary.");

    if (isNaN(bills))
        alert("Please enter a valid number for bills.");

    if (isNaN(Interest))
        alert("Please enter a valid interest rate");

    if (isNaN(DownPayment))
        alert("Please enter a valid down payment.");

    if (isNaN(term) || term > 100)
        alert("Please enter a term in years.");

}
function clearfields() {
    document.getElementById("salary").value = "";
    document.getElementById("bills").value = "";
    document.getElementById("Interest").value = "";
    document.getElementById("dp").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("monthly").innerHTML = "";

}


const electron = require('electron');
const remote = electron.remote;

function quitApplication() {
    window.close();
}