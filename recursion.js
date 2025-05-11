// when a function  calling itself and run its known as recusrsion
// we can use recusion to print infity loop wihtout using loops too lets see both

// normal function
function normalday(){
    console.log("sunday");
    console.log("monday");
    console.log("friday");
//  normalday()  if we write normal day here then it will print forever in a infinite loop
}
normalday() // this will print all three day as per normal funtion
    
// now recursion method
let counter = 10
function example(){
    console.log(counter);
    counter = counter - 1; // counter value is initial value is 10
    if (counter===0)
    return;
    example() /* for inifity loop but we have if condion this time 
              where counter value also -1 alwayse */
}
example()

/* also we are using let since its more of a 
local variable and used in block where var can be 
used as global variable, we can still use var insted of let */