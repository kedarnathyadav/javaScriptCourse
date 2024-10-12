//functions

function addNumbers(number1,number2){
    var addition = number1 +number2;
    return addition;
}

var result1 = addNumbers(10,10);
var result2 = addNumbers(20,10);

console.log(result1);
console.log(result2);

var person = {
    name: "king"
};

console.log(Object.values(person));
console.log(Object.keys(person));
console.log("king".toLocaleLowerCase);
console.log("king".toUpperCase);
console.log("king".indexOf("i"));
