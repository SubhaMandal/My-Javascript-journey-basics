var bard ={ // creating object
    hasWing: true,
    canFly: true,
    hasFeathers: true,
}
var eagle = Object.create(bard);
console.log("eagle has wings:", eagle.hasWing);
eagle.canFly= false; // replacing
console.log("eagle can fly", eagle.canFly);