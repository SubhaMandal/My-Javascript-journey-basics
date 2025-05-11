// checking the lenght of an array is .length to the array name
var Newarray = ['me', 'you', 'music']
console.log(Newarray.length);

// printing the specific value from array is also possble by doing this

console.log(Newarray[0]);

// printing the full array using for loop is easy as well, for example:

for(i=0; i<Newarray.length; i++){
    console.log(Newarray[i]); /* if we put 0 insted of i in console.log then it will print "me" 3 
    time since the length of the array is 3 and we are priting only 0 index value which is me; */
}
 // now to do concatination in javascript we can use + or concat 

 var a = "hi ";
 var b = "Subha";
 console.log(a + b);

 // or

 console.log(a.concat(b));

 // string we can use multiple new funtion such as :
 /* charAt() 

concat()  add to string together

indexOf()  indexOf returns the location of the first position that matches a character

lastIndexOf()  lastIndexOf finds the last match, otherwise it works the same as indexOf.

split() The split method chops up the string into an array of sub-strings:

There are also some methods to change the casing of strings. For example:  

toUpperCase() 

toLowerCase()  */

let array = [1, 2, 3, 4, 5]; // using an array
console.log(array.indexOf(3)); // Output: 2
console.log(array.indexOf(6)); // Output: -1

let string = "Hello, world!"; // using string
console.log(string.indexOf("world")); // Output: 7
console.log(string.indexOf("foo")); // Output: -1

//You can also specify a starting index from which the search should begin:
let array1 = [1, 2, 3, 4, 5, 3];
console.log(array.indexOf(3, 3)); // Output: 5

// using split()

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

//using casing

var greet = "Hello";
var Upper = greet.toUpperCase(); // "HELLO, "
var lower = greet.toLowerCase(); // "hello, "
console.log(Upper, lower);




