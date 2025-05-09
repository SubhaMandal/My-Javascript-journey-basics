const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
// just remember that it can work on string too
/*   
The for...of loop automatically iterates over each element
 of the numbers array and assigns it to the variable number, 
 which you can then use within the loop body.

One thing to note is that for...of loops cannot be used to 
iterate over plain JavaScript objects (i.e., objects created using {}),
as they are not iterable by default. However,
 you can use the for...in loop to iterate over the properties of an object.


we can use this on anything that is iterable so even in DOM

const paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
  console.log(paragraph.textContent);
}




*/