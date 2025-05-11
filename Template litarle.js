/*Template literals, introduced in ECMAScript 6 (ES6), provide an elegant way to create strings in JavaScript. They allow for embedded expressions and multiline strings, making string manipulation more flexible and readable. Here's a guide on how to work with template literals:

Basic Syntax:
Template literals are enclosed by backticks (`), not single or double quotes. */

const greeting = `Hello, world!`;

/*Embedding Expressions:
Template literals allow you to embed expressions within ${}. 
These expressions can be variables, function calls, or any valid JavaScript expression. */

const name = 'Alice';
const Hi = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

/* Multiline Strings:
Template literals 
support multiline strings without the need for explicit newline characters (\n).*/
const multilineString = `This is a 
multiline
string.`;
console.log(multilineString);
/* Output:
This is a 
multiline
string.
*/
/*Tagged Templates:
Template literals can be "tagged" with a function. 
This allows for more advanced string processing.
javascript
Copy co */

function tagFunction(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values); // Array of interpolated values
}

const a = 10;
const b = 20;
tagFunction`Sum of ${a} and ${b} is ${a + b}`;
/* Output:
[ 'Sum of ', ' and ', ' is ', '' ]
[ 10, 20, 30 ]
*/

/* Nesting Template Literals:
You can nest template literals within each other to create complex strings. */
const nestedTemplate = `Outer: ${`Inner: ${name}`}`;
console.log(nestedTemplate); // Output: Outer: Inner: Alice
/* const escapedBacktick = `\``;
console.log(escapedBacktick); // Output: `
*/

/*Template literals provide a powerful 
way to create strings in JavaScript, especially when you need 
to interpolate variables or create multiline strings. 
They improve code readability and make string manipulation more intuitive. */






