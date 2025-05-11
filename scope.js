/* scope is all about accesibilaty and it is mainly two type
Global variale and Local variable, a global variable can be access by rest of the program
where a local variable could ve exclusively to a function  */

// global variable
var Globalvar = 10;
function examvar(){
    var localvar = 20;
    console.log(localvar);
}
examvar()
console.log(Globalvar);
/* we can use Globalvar and print here since it is declared globally but we can't
   console.log(localvar) since it is a local variable [ outside the function]   */
 /*  if we try to run this code outside the function console.log(localvar);
 it will give us this messege --
    console.log(localvar);
               ^

ReferenceError: localvar is not defined   */