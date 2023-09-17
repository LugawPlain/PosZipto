document.addEventListener("DOMContentLoaded", function() {
  
var firsthtmldiv = document.getElementById("firsthtml");
var secondhtmldiv = document.getElementById("secondhtml");

firsthtmldiv.style.display = "block";
secondhtmldiv.style.display = "none";

var smallButton = document.getElementById("small");
var mediumButton = document.getElementById("medium");
var largeButton = document.getElementById("large");
var orders = document.querySelectorAll(".orderpanel3")
var size;
var flavor;
var price = 0;
var total = 0;
var pricelist = {
    small:{
    "BmSaltedCaramel":29,
    "BmDarkChoco":29,
    "BmChocolate":29,
    "BmHershey's":29,
    "BmMatcha":29,
    "BmUbe":29,
    "BmStrawberry":29,
    "BmTaro":29,
    "BmWinterMelon":29,
    "BmChocoKisses":29,
    "BmCappucino":29,
    "BmOkinawa":29,
    "BmRedVelvet":29,
    "BmOreoCookies":29,
    "BmCheesecake":29,
    "PmSaltedCaramel":50,
    "PmDarkChoco":50,
    "PmChocolate":50,
    "PmHershey's":50,
    "PmMatcha":50,
    "PmUbe":50,
    "PmStrawberry":50,
    "PmTaro":50,
    "PmWinterMelon":50,
    "PmChocoKisses":50,
    "PmCappucino":50,
    "PmOkinawa":50,
    "PmRedVelvet":50,
    "PmOreoCookies":50,
    "PmCheesecake":50
    },
    medium:{
    "BmSaltedCaramel":39,
    "BmDarkChoco":39,
    "BmChocolate":39,
    "BmHershey's":39,
    "BmMatcha":39,
    "BmUbe":39,
    "BmStrawberry":39,
    "BmTaro":39,
    "BmWinterMelon":39,
    "BmChocoKisses":39,
    "BmCappucino":39,
    "BmOkinawa":39,
    "BmRedVelvet":39,
    "BmOreoCookies":39,
    "BmCheesecake":39,
    "PmSaltedCaramel":65,
    "PmDarkChoco":65,
    "PmChocolate":65,
    "PmHershey's":65,
    "PmMatcha":65,
    "PmUbe":65,
    "PmStrawberry":65,
    "PmTaro":65,
    "PmWinterMelon":65,
    "PmChocoKisses":65,
    "PmCappucino":65,
    "PmOkinawa":65,
    "PmRedVelvet":65,
    "PmOreoCookies":65,
    "PmCheesecake":65
    },
    large:{
    "BmSaltedCaramel":60,
    "BmDarkChoco":60,
    "BmChocolate":60,
    "BmHershey's":60,
    "BmMatcha":60,
    "BmUbe":60,
    "BmStrawberry":60,
    "BmTaro":60,
    "BmWinterMelon":60,
    "BmChocoKisses":60,
    "BmCappucino":60,
    "BmOkinawa":60,
    "BmRedVelvet":60,
    "BmOreoCookies":60,
    "BmCheesecake":60,
    "PmSaltedCaramel":100,
    "PmDarkChoco":100,
    "PmChocolate":100,
    "PmHershey's":100,
    "PmMatcha":100,
    "PmUbe":100,
    "PmStrawberry":100,
    "PmTaro":100,
    "PmWinterMelon":100,
    "PmChocoKisses":100,
    "PmCappucino":100,
    "PmOkinawa":100,
    "PmRedVelvet":100,
    "PmOreoCookies":100,
    "PmCheesecake":100,
    },
    addons:{
        "BobaPearls":10,
        "NataCrystals":10,
        "CreamPuff":10,
        "CreamCheese":10,
        "CrushedOreo":10,
        "CoffeeJelly":10,
        "JavaChips":10,
    }
}
smallButton.addEventListener("click", function() {
    size = this.id
    toggleClickState(smallButton);

});

mediumButton.addEventListener("click", function() {
    size = this.id
    toggleClickState(mediumButton);
});

largeButton.addEventListener("click", function() {
    size = this.id
    toggleClickState(largeButton);
});

function resetOpacity() {
    smallButton.style.opacity = "0.6";
    mediumButton.style.opacity = "0.6";
    largeButton.style.opacity = "0.6";
}

function toggleClickState(button) {
    if (button.style.opacity === "1") {
        resetOpacity();
        size = undefined;
        tempflavor=undefined;
        price = 0;
    } else {
        resetOpacity();
        button.style.opacity = "1";
    }
}
var tempaddon;
var budgetcontainer = document.querySelector(".menucontainer:nth-child(1) .container");
var budgetflavor = budgetcontainer.querySelectorAll("button");
var tempflavor;
budgetflavor.forEach(function(button) {
    button.addEventListener("click", function() {
        if(size != undefined){
        tempflavor = ("Bm "+ button.textContent);
        console.log(tempflavor + " " + size);
        addOrder(tempflavor,size);
        }
    });
});    

var premiumcontainer = document.querySelector(".menucontainer:nth-child(2) .container");
var premiumflavor = premiumcontainer.querySelectorAll("button");
premiumflavor.forEach(function(button) {
    button.addEventListener("click", function() {
        if(size != undefined){
        tempflavor = ("Pm "+ button.textContent);
        console.log(tempflavor + " " + size);
        addOrder(tempflavor,size);
        }
    });
});

var addonscontainer = document.querySelector(".menucontainer:nth-child(3) .container");
var addonsbutton = addonscontainer.querySelectorAll("button");
addonsbutton.forEach(function(button) {
    button.addEventListener("click",function(){
        if(tempflavor != undefined){
            var tempaddon = (button.textContent);
            console.log(tempflavor + " " + size + " " + tempaddon);
            addaddon(tempflavor,size,tempaddon)
            tempflavor = undefined;
            tempaddon = undefined;
            price = 0;
            addonsprice = 0;
        }
    });
});   

var totaldiv = document.querySelectorAll(".totalpanel3");
var tempsize;
function addOrder(tempflavor,size){
    if(size == "small"){
        tempsize = "16oz"
        var ordertrim = (tempflavor).replace(/\s/g, '');
        price = pricelist.small[ordertrim]
        console.log(price);
    }
    else if(size == "medium"){
        tempsize = "22oz"
        var ordertrim = (tempflavor).replace(/\s/g, '');
        price = pricelist.medium[ordertrim];
        console.log(price);
    }
    else if(size == "large"){
        tempsize = "1 Liter"
        var ordertrim = (tempflavor).replace(/\s/g, '');
        price = pricelist.large[ordertrim];
        console.log(price);
    }
    if(price != 0){
    var order = document.createElement("div");
    order.classList.add("orderpanel3div");
    var span = document.createElement("span");
    span.textContent = tempflavor + " " + tempsize;
    span.classList.add("orderleft")
    var priceSpan = document.createElement("span");
    priceSpan.textContent = price;
    priceSpan.classList.add("orderright");
    total += price;

    totaldiv.forEach(function(element){
        element.innerText = "Total = "+ String(total);
    })

    order.appendChild(span);
    order.appendChild(priceSpan);
    orders.forEach(function(element){
        element.appendChild(order.cloneNode(true));
    })
   
}
}
var addonsprice;
function addaddon(tempflavor,size,tempaddon){
    if(tempaddon){
        orders.forEach(function(element){
            element.removeChild(element.lastChild);
        })
        addonsprice = pricelist.addons[(tempaddon).replace(/\s/g, '')];
        console.log(addonsprice);   
        var order = document.createElement("div");
        order.classList.add("orderpanel3div");
        var span = document.createElement("span");
        span.textContent = tempflavor + " " + tempsize + " " + tempaddon;
        span.classList.add("orderleft")
        var priceSpan = document.createElement("span");
        priceSpan.textContent = price + addonsprice;
        priceSpan.classList.add("orderright");
        total += addonsprice;

        totaldiv.forEach(function(element){
            element.innerText = "Total = "+ String(total);
        })

        order.appendChild(span);
        order.appendChild(priceSpan);
        
        orders.forEach(function(element){
            element.appendChild(order.cloneNode(true));
        })
    }
}

var removebutton = document.getElementById("delete");
var remove = removebutton.querySelector("button");
remove.addEventListener("click",function(){
    removeorder();
})
function removeorder(){
    if (orders.length > 0) {
        var minusprice = Number(orders[0].lastElementChild.lastChild.innerText);
        orders.forEach(function(element){
            element.lastElementChild.remove();
        })
        total -= minusprice;
        console.log(total);
        totaldiv.forEach(function(element){
            element.innerText = "Total = "+ String(total);
        })
        tempflavor = undefined;
        tempaddon = undefined;
    }
}
var totalprice = document.getElementById("pricepanel");
var cashoutdiv = document.getElementById("cashout");
var cashout = cashoutdiv.querySelector("button");
var temptotal = total;
cashout.addEventListener("click",function(){
    if(total != 0){
    firsthtmldiv.style.display = "none";
    secondhtmldiv.style.display = "block";
    temptotal = total;
    totalprice.innerText = ("Total = ",temptotal);
    }
})




var totalamount = document.getElementById("pricepanel2");

var numpaddiv = document.getElementById("calculatorpanel9");
var numpad = numpaddiv.querySelectorAll("button");
var number;
var num = 0;
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
}

var change;
var paiddiv = document.getElementById("paid");
var paid = paiddiv.querySelector("button");
paid.addEventListener("click", function() {
    change = temptotal - num;
    
    if(change <= 0){
        change = Math.abs(change);
        console.log("change is " + change);
        if(paid.textContent == "Next Order"){
            nextOrder();
        }
        else{
        paid.textContent = "Next Order";
        totalprice.textContent = ("Change = " + change);
        return;
        }
    }
    temptotal = change;
    totalprice.textContent = temptotal;
    num = 0;
})

function nextOrder(){
    
}
});