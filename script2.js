var num = 0;

var number;
var totalprice = document.getElementById("pricepanel");
var totalamount = document.getElementById("pricepanel2");
totalamount.textContent = num;

var numpaddiv = document.getElementById("calculatorpanel9");
var numpad = numpaddiv.querySelectorAll("button");

numpad.forEach(function(button) {
    button.addEventListener("click", function() {
        var appendnumber = button.textContent;
   
        number = Number(num.toString() + appendnumber.toString()); 
        num = number;
        totalamount.textContent = num;
        console.log(num);
    });
});

var amountdiv = document.getElementById("calculatorpanel8");
var amountpad = amountdiv.querySelectorAll("button");

amountpad.forEach(function(button) {
    button.addEventListener("click", function() {
        var appendamount = button.textContent;
        if(appendamount == 'C'){
            removeappendnumber();
        }
        else{
        var temp = appendamount.slice(0,-3);
        num += parseInt(temp,10);
        }
        console.log(num);
        totalamount.textContent = num;
    });
});
function removeappendnumber(){
    num = parseInt(num.toString().slice(0,-1),10);
    if(isNaN(num)){
    num = 0;
    }
    console.log(num);
    totalamount.textContent = num;
}
total = 29;
console.log(total);
var change;
var paiddiv = document.getElementById("paid");
var paid = paiddiv.querySelector("button");
paid.addEventListener("click", function() {
    change = parseInt(total,10) - num;
    if(change <= 0){
        change = Math.abs(change);  
        console.log("change is " + change);
        if(paid.textContent = "Next Order"){

        }
        else{
        paid.textContent = "Next Order";
        }
    }
    num = 0;
})


