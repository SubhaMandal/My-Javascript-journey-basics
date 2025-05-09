/* we can use var even later after a funtion is declared */

console.log(user);
var user = "ram"
var user = "laksman"
console.log(user);

/* var can also be used multiple time for same varibale name 
it will just replace with thelatest one. also if we not declared any value
in the user variable it will stil print with undifined but will not give an error */

/* we genaraly use let when we use knw value can be chnage later ,
 however we can't use let variable  declare after consloe log it will give an error*/

 /* also we cannot redeclare same variable twice what we can do is assigne a
 new value to the variable like this */

 let user1
 console.log(user1);
 user1= "New";
 console.log(user1);
 // let user1 = "New";              but we can't do this

 /* we use const var when we work with constant value */

 //const user2  --- error
 //console.log(user2); --- error
 //const user2 = "HM" --- error
 /* const variable must declare during its 
 declration and also cant redeclare or assing value later like let var, so the right order
 shoud be like this -- */
 const value = "HM";
 console.log(value);


