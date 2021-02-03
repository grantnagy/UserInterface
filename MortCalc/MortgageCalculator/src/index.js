"use strict";
const $ = selector => document.querySelector(selector);


function calculate() {
    var r = 0, AF;

    let p = document.getElementById("houseprice").value.replace(/[,.]/g, "");
    p /=100;
    let dp = document.getElementById("dp").value.replace(/[,.]/g, "");
    dp /=100;
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
        alert("Please enter a valid number with no commas.");

    if (isNaN(dp))
        alert("Please enter a valid number with no commas.");

    if (isNaN(i))
        alert("Please enter a valid percentage.");

    if (isNaN(t) || term > 100)
        alert("Please enter a term in years.");

}
function clearfields(){
    document.getElementById("houseprice").value = "";
    document.getElementById("dp").value = "";
    document.getElementById("Interest").value = "";   
    document.getElementById("term").value = ""; 
    document.getElementById("result").innerHTML = "";
}
function formatNumber(e){
    var rex = /(^\d{2})|(\d{1,3})(?=\d{1,3}|$)/g,
        val = this.value.replace(/^0+|\.|,/g,""),
        res;
        
    if (val.length) {
      res = Array.prototype.reduce.call(val, (p,c) => c + p)            // reverse the pure numbers string
                 .match(rex)                                            // get groups in array
                 .reduce((p,c,i) => i - 1 ? p + "," + c : p + "." + c); // insert (.) and (,) accordingly
      res += /\.|,/.test(res) ? "" : ".0";                              // test if res has (.) or (,) in it
      this.value = Array.prototype.reduce.call(res, (p,c) => c + p);    // reverse the string and display
    }
  }
  
  var ni = document.getElementById("houseprice");
  var n2 = document.getElementById("dp");
  ni.addEventListener("keyup", formatNumber);
  n2.addEventListener("keyup", formatNumber);
  
  const electron = require('electron');
  const remote = electron.remote;
  
  function quitApplication(){
     window.close();
  }