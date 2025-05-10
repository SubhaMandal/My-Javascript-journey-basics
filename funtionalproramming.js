var currencyOne = 100;
var currencytwo = 0;
var exchangeRate = 1.2;

// creating a function which will use multiplication method
function convertCurrency(ammount, rate){
    return ammount * rate
} // now the convertCurrency have proper uses it will multiply whne we ue it

currencytwo= convertCurrency(currencyOne, exchangeRate); // the funtion is using its power here
console.log(currencytwo); 