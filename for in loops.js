// this loop is usefull for objcets

const car= {
    color: "red",
    speed: "150kmph",
    type: "lambo",
    model: "old",
    price: 4000000
};

for (const b in car){
    console.log(b);
}
for (const b in car){
    console.log(b + ":" + car[b]);
}