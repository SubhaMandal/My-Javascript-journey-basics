//function that takes an array as input and display all items of this array
function listArrayItems(arr) { // arr is the paramerter
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i]) // using i to print numerical value without it program will print just the colors arrey
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// if we use i+1 in the console.log then the value will start from 1 insted of 0

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}

/* code can be writen as this as well, also changing the 
function name so it will not overwrite the previous output */

function listArrayItem(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItem(colors);

