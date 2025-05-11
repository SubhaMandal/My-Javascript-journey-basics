function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('Hello')

/*

Why is this useful?

It's useful because I can use return values from one function inside another function.

Here's an example.

I'll first code a function that returns a double of a number that it received: */

function doubleIt(num) {
    return num * 2
}
console.log(doubleIt(5));

// new way we can do this

function objectMaker(val) {
    return {
        prop: val
    }
}
var obj = objectMaker(5);
console.log(obj);

// calling doubleIt here
console.log(doubleIt(10).toString()); // here we are getting 20 as a sting output

console.log(objectMaker( doubleIt(100) ));

/* What does all of this mean?

It means that by JavaScript allowing me to use the return keyword 
as described above, I can have multiple function calls, returning 
data and manipulating values, based on whatever coding challenge I have in front of me.

Being able to return custom values is one of the foundations that 
makes functional programming possible. */

