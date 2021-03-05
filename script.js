

function compute()
{

    //setting all variables
    var principal = parseInt(document.getElementById("principal").value);
    
    //validates negative or empty entry and sets focus back to principal input field
    if (principal <= 0){
        alert("Enter a positive nummber");
        document.getElementById("principal").focus();
        return false;
    }
    if (document.getElementById("principal").value == ""){
        alert("Enter a positive nummber");
        document.getElementById("principal").focus();
        return false; 
    }
    
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
  
    //calculates interest amount only
    var interest = (principal * years * rate) / 100;
    
    //calculates total amount with principle and interest amount and then limits to a 2 digit floating decimal
    var total = parseFloat(interest + principal).toFixed(2);
    var result = document.getElementById("result");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");
    var result4 = document.getElementById("result4");
    
    //gets current year from date and the figures out future year calculations
    var today = new Date();
    var year = today.getFullYear();
    var futureyear = year + years;

    //results printout to page
    result.innerHTML = "If you deposit <mark>$" + principal +" </mark>";
    result2.innerHTML = "At a interest rate of <mark>" + rate +" %</mark>";
    result3.innerHTML = "You will receive an amount of <mark>$" + interest +" in interest and your total deposit with interest will be " + total + ".</mark>";
    result4.innerHTML = "In the year <mark>" + futureyear+" </mark>";




}

//function to output interest rate selection from slider
function updateintrate(val)
{
   var span = document.getElementById("intspan"); 
 
                span.innerHTML = val + " %"; 
            
}