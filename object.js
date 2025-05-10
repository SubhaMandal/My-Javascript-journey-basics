//creating an object with properties and their values
var assistantManager = { // assistantManager is the new object 
    rangeTilesPerTurn: 3, // property and values of the object
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager); // printing the whole object
console.log(assistantManager.health); // priniting a sepcific value of the object
console.log(assistantManager.specialAbility);

// insted of dot notation we can also use the brakets noation 

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

var name={};
name.me = "Subha";
name.you = "Radhika";
name.another = "LMAO";
console.log(name);