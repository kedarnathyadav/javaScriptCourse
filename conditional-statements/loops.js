//Loops

var names = [
    "NTR",
    "Ramcharan",
    "Joe",
    "Aisha"
];

for(var i = 0; i<names.length;i++){
    console.log(names[i]);
}

console.log('for of');

for(const name of names){
    console.log(name);
}

console.log('forEach');

names.forEach(element => {
    console.log(element); 
});