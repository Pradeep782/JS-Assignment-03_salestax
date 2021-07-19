"use strict";


/* This function exucutes when someone clicks on the calculate button 
It takes two inputs and evalutes inputs under some conditions if the evaluations
 passes it proceeds to the calucalations and displays them else gives an alert msg to user. */
 
function processEntries(){

    const subtotal=document.getElementById('subtotal').value;
    
    const taxrate=document.getElementById('tax_rate').value;
    
    if(isNaN(subtotal) || parseFloat(subtotal)<0 || parseFloat(subtotal)>10000){
    
    alert("Subtotal must be > 0 and < 10000  ");
    
    }
    
    else if(isNaN(taxrate) || parseFloat(taxrate)<0 || parseFloat(taxrate)>12){
    
    alert("Tax Rate must be > 0 and < 12");
    
    }
    
    else{
    
    const tax = (parseFloat(subtotal) * parseFloat(taxrate))/100;
    
    var total = parseFloat(tax) + parseFloat(subtotal);
    
    document.getElementById("sales_tax").value = tax.toFixed(2);
    
    document.getElementById("total").value = total.toFixed(2);
    
    }
    
    }
    
    //This function is used to clear the textboxes that are filled by the user 
    
    function clearForm(){
    
    document.getElementById('subtotal').value = "";
    
    document.getElementById('tax_rate').value = "";
    
    document.getElementById("sales_tax").value = "";
    
    document.getElementById("total").value = "";
    
    }


    

    