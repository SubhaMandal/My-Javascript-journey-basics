var purchase = {
    shirt: 599,
    tax: 0.6,
    TotalPrice: function(){
        var calculation = this.shirt * this.tax; // this keyword will reffer to cuurent methods, so we don't have to remeber the name of the metods inside the object.
        console.log("The final Price is: ", calculation);
        return calculation; // Returning the calculated price
    } /* we can use purches.shirt inside the lst method but we us this
     to reduce waste, next if we have to get many different 
     but same function we can copy paste thw whole funcion and it will work */
};

// Call the TotalPrice method
purchase.TotalPrice();
console.log(purchase.shirt);

// THIS IS AN EXAMPLE OF OOP 

// LETS MAKE SAME CODE SUING FUNCTIONAL PROGRAMING

var shirt = 599;
var tax = 0.6;
function totalprice(shirt,tax){
    return shirt * tax

}
var newprice= totalprice(shirt,tax);
console.log(newprice);
console.log(shirt);