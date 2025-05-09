var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear');  // ['apple', 'pear']
fruits.push('mango'); // ['apple', 'pear', 'mango']
console.log(fruits);
fruits.pop('pear');
console.log(fruits);


// push() add property and pop() remove property

// writing isside functiom will be like

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('Hi', "what's up", 'yo') // all three value will go to one by one to the array

/* Even better, I don't have to console log the newly built array. 

Instead, I can return it: { also remeber previus fuction won't print since we have same name
 function again}
*/

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);
