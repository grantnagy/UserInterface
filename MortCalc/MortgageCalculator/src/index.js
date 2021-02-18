"use strict";
const $ = selector => document.querySelector(selector);


function calculate() {
    var r = 0, AF;

    let p = document.getElementById("houseprice").value;
    let dp = document.getElementById("dp").value;
    let i = document.getElementById("Interest").value;
    let t = document.getElementById("term").value;

    let n = t * 12;
    i = (i/100)/12;
    AF = p - dp;
    let c = (1+i)**n;

    r = (AF*i*c)/(c-1);

    r = r.toFixed(2);
    if (isNaN(r)) document.getElementById("result").innerHTML = "";
    else if(r < 0) alert("invalid inputs");
    else {
    var result = r.toString();
    document.getElementById("result").innerHTML = "Monthly Payment: $" + result;
    }

    if (isNaN(p))
        alert("Please enter a valid number.");

    if (isNaN(dp))
        alert("Please enter a valid number.");

    if (isNaN(i))
        alert("Please enter a valid percentage.");

    if (isNaN(t) || term > 100)
        alert("Please enter a term in years.");

}
function clearfields(){
    document.getElementById("houseprice").value = "";
    document.getElementById("dp").value = "";
    document.getElementById("Interest").value = "";   
    document.getElementById("result").innerHTML = "";
}

  
  const electron = require('electron');
  const remote = electron.remote;
  
  function quitApplication(){
     window.close();
  }