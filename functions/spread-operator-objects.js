//spread operator objects

var akhila= {
     firstName : "akhila",
     age : 21,
     isFemale : true,
     balance : 100.32,
     dob : new Date(2000,0,30).toJSON(),
     toString : function() {
      return `Name: ${ this.firstName} Age: ${ this.age}`
     },
     deleteMe : true
};

const address = {
   city: "London",
   postCode: "SW9"
}

const person = {
      ...akhila,
      address: {...address}
}

console.log(person);