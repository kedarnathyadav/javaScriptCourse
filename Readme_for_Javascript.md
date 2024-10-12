refer "D:\PROFESSIONAL Full Stack Developer\amigosCode\spring-boot-fullstack\README1.md"

till 274 steps

we are starting java script:

### step 275- 280:
intro to javascript.

Javascript it is not Java and it is dynamically typed as we use VAR instead of string int and other types.
That is why it is slow as it couldn't decide which type of variable unless it goes to runtime.
It runs on javascript engine named V8.

install node.js

install vs code

create a folder
 
create a file name hello-world.js

```javascript
console.log("Hello world js");
console.log(20*2);

```

run by code.
open new terminal in vs code
type node hello-world.js

### step 281:

go to extensions serach for code runner

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

you get run button on the right top corner.

```output
[Running] node "d:\PROFESSIONAL Full Stack Developer\amigosCode\javaScriptCourse\hello-world.js"
Hello Js
20

[Done] exited with code=0 in 0.246 seconds
```
to clear the unneccesary and just to get the output.

click ctrl + shift + p and serach for open user settings(json)

update

```json
{
    "workbench.colorTheme": "Visual Studio Light",
    "editor.minimap.enabled": false,
    "code-runner.showExecutionMessage": false
}
```

```output
Hello Js
20
```
change the output console panel to right position

click ctrl + shift + p and search for toggle auto save

### step 282:
COMMETS:
Single line comments:   //
Multi line Comments: /* */
### step 283:
https://eslint.org/
helps to follow some rules
we can we double quotes or single quotes but follow only one method
we can use semicolon or not but use one method

eslint helps to give error if give it rule to follow one

### step 284:

### step 285:
data types:
```
var firstName = "Jamila";
var age = 21;
var isFemale = true;
var balance = 100.32;
var dob = new Date(2000,0,30);
var person= {};
var empty = undefined;

console.log(firstName);
console.log(age);
console.log(isFemale);
console.log(balance);
console.log(dob);
console.log(person);
console.log(empty);
```
### step 286:
refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

strings.js
```javascript
//strings

var brand = "Kedarnath";

console.log(typeof brand);
console.log(brand.length);
console.log(brand.toUpperCase());
console.log(brand.substring(0,6));

var a = "kedarnath";
var b = "yadav";

console.log(a + " "+b);
console.log(`${a} ${b}`);


```
### step 287:
objects

```js
var person= {
     firstName : "Jamila",
     age : 21,
     isFemale : true,
     balance : 100.32,
     dob : new Date(2000,0,30).toJSON(),
     address: {
        city: "Lodon",
        postCode: "SW9"
     }
};

console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

```
### step 288:
boolean
```javascript
//Boolean
var isAdult = false
console.log(isAdult)

if (isAdult) {
    console.log("isadult : )")

}else {
    console.log("is not an adult :(")
}

console.log(!true)
console.log(!false)
```
### step 289:

### step 290:
functions

```javascript
//functions

function addNumbers(number1,number2){
    var addition = number1 +number2;
    return addition;
}

var result1 = addNumbers(10,10);
var result2 = addNumbers(20,10);

console.log(result1);
console.log(result2);
```
### step 291:
update the last step function.js
```javascript
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

```
refer the javascript docs

### step 292:
loops.js
```javascript
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
```
### step 293:
update loops.js
```javascript
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
```
### step 294:
while-loops.js
```javascript
//while loops

var names = [
    "NTR",
    "Ramcharan",
    "Joe",
    "Aisha"
];

var index = 0;

while(index< names.length){
    console.log(names[index]);
    index = index + 1;
}
```
### step 295:
comparison-operators.js
```javascript
//comparison operators

// < <= > >= == !=

// boolean is either true or false

console.log(10 == 10);
console.log(10 != 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 >= 10);

console.log("A" == "B");
console.log("A" != "B");
```
### step 296:
logical-operators.js
```javascript
//logical operators

// && ||

// boolean is either true or false

console.log(10 == 10 && "A" == "A");
console.log(10 == 10 || "A" == "B");

```
### step 297:
if-statements.js
```javascript
//if-statements

// var conition = 1 < 0;

// if(condition){
//     console.log("Runs...");
// }else {
//     console.log("Else condition ran..");
// }


var gender = 'F';

if(gender == 'M') {
    console.log('Male');
} else if (gender == 'F'){
    console.log('Female')
} else {
    console.log('Unknown')
}
```
### step 298:
ternary-if.js

```javascript
//ternary-if

var number = 101;
var result = number % 2 == 0 ? 'Even' : 'Odd';

console.log(result);

// if(number % 2 == 0){
//     console.log('Even');
// }else{
//     console.log('Odd');
// }
```
### step 299:
switch.js
```javascript
//switch

var gender = 'M';

switch(gender){
    case "M":
        console.log('Male');
        break;
    case "F":
        console.log('Female');
        break;
    default:
        console.log('Unknown');
}
```
### step 300:
var is bad to use and once you create a var variable in in loop. the compiler assigns it in top of the code and its even acessible out side the loop.

### step 301:
use let instead of var in loops.

### step 302:
const.js

```javascript
// const
const brand = "Amigoscode";
const brandObject = {};
brandObject ["brand"] = brand;
delete brandObject.brand;
// brand = 10;
// brand = function() {
// return "Hello”
// }
console.log(brand);
console.log(brandObject);   
```
From above code a string can't be changed again which is assigned with the type constant.
But you can see that object can be changed like adding and deleting but you can't assign to a different type.
### step 303:
update const.js
```javascript
// const
const brand = "Amigoscode";
const brandObject = {};
brandObject ["brand"] = brand;
delete brandObject.brand;
// brand = 10;
// brand = function() {
// return "Hello”
// }
console.log(brand);
console.log(brandObject);   

const hello = function() {
console.log("hello");
}

// hello = 1

hello(); 
```
We is only two things either constant or let. if you wanna change something use let if you don't wanna change the variable values then use const. 
### step 304:
```javascript
// Type Coercion
console.log(0 == false);
console.log(0 == true);
console.log("0" == false);
console.log("0" == true);
console.log("1" == 1);
```

### step 305:
```javascript
// Type Coercion
console.log("Type Coercion")
console.log(0 == false)
console.log(0 == true)
console.log("0" == false)
console.log("0" == true)
console.log("1" == 1)
// === without Type Coercion
console.log("Without Type Coercion")
console.log(10 === false)
console.log(0 === true)
console.log("0" === false)
console.log("0" === true)
console.log("1" === 1)   
```
### step 306: 
function.js
```javascript
const getBrand = function(brand) {
    return{
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
    }
}
    const brand = getBrand("Amigoscode");
    console.log(JSON.stringify(brand, null, 1));   
```
### step 307:
arrow-function.js
```javascript
const getBrand = brand => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
    }
    )
    const add = (a, b) => a + b;
    const calculate = (a, b, sign) => a + big
    const brand = getBrand("Amigoscode")
    console.log(JSON.stringify(brand, null, 1))   
```
### step 308:
```javascript
// Function Default Parameter
const getBrand = (brand = "Hello", a = {}) => ({
  brand: brand,
  website: `www.${brand.toLowerCase()}.com`,
});
const brand = getBrand("Samsung");
console.log(JSON.stringify(brand, null, 1));

```
### step 309:
```javascript
// Callbacks
const greetUser = (username, callback) => {
  if (callback) {
    console.log(callback(username));
  } else {
    console.log(username);
  }
};
const cb = (username) => {
  return "Hello " + username;
};
greetUser("king", (u) => {
  return "Hello " + u;
});

greetUser("king");
```
### step 310:
update objects.js
```javascript
var person= {
     firstName : "Jamila",
     age : 21,
     isFemale : true,
     balance : 100.32,
     dob : new Date(2000,0,30).toJSON(),
     address: {
        city: "Lodon",
        postCode: "SW9"
     },
     toString : function() {
      return `Name: ${ this.firstName} Age: ${ this.age}`
     },
     deleteMe : true
};

// person.lastName = 'king';
person["lastName"] = 'king';

//delete person.deleteMe;
delete person["deleteMe"];

console.log(person.toString);
console.log(person);

for(const p in person){
   console.log(person[p]);
}

console.log(Object.keys(person));
console.log(Object.values(person));



```

### step 311:

spread operator

```javascript
// Object Destructuring
const person = {
    firstName: "queen",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
    city: "London",
    postCode: "SW9"
    }, 
    toString: function() {
    return `Name: ${this.firstName}
    Age: ${this.age}`
    },
    deleteMe: true  
};

//const firstName = person.firstName;
//const age = person.age;
//const balance = person.balance;

const { 
    firstName,
    firstName: name ,
     age,
      balance,
      address : { city: town }
     } = person;

console.log(firstName);
console.log(name);
console.log(age);
console.log(balance);
console.log(town);

```
### step 312:
```javascript
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
```
### step 313:
```javascript
//arrays-map.js

const numbers = [1, 2, 3, 4 , 5];
numbers.forEach(number => console.log( number ))
console.log(numbers[3])
numbers[3] = 44
console.log(numbers[3])
numbers.push(60)
console.log(numbers)
const indexOfFive = numbers.indexOf(5)
console.log(indexOfFive) 
numbers.splice(indexOfFive, 1)
console.log(numbers)
```
### step 314:
```javascript
const numbers = [1, 2, 3, 4 , 5];
const numberTimesTwo = numbers.map(number=> number - 2);
console.log(numberTimesTwo);  
```
### step 315:
```javascript
// Arrays Destructing
const names = [
"James",
"Mariam",
"Jamal",
"Aisha",
"Alex"
];
const [j, mariam, jamal, ...rest] = names;
console. log(j);
console.log(mariam);
console.log(jamal);
console.log(rest);  
```
### step 316:
create directory modules
create two files
index.js
lib.js

open terminal and go to the modules folder
```bash
npm init -y
```
package.json fle will be created
add "type" : "module"

lib.js
```javascript
const BRAND = "Amigoscode";

export default BRAND;
```

index.js
```javascript
import brand from "./lib.js";
console.log(brand);
```

package.json
```json
{
  "name": "modules",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}

```
### step 317:
imports and exports
update index.js
```javascript
// import brand, { addNumber, subNumber } from "./lib.js";
import brand,  * as Lib  from "./lib.js";
console.log(brand);
// console.log(addNumber(10, 20));
// console.log(subNumber(20, 10));

console.log(Lib.addNumber(10, 20));
console.log(Lib.subNumber(20, 10));
console.log(Lib.brand);

```
update lib.js:
```javascript
const BRAND = {
    brand: "Amigoscode",
    website: "amigoscode.com" 
    
};

export default BRAND;

// export const addNumber = (a, b) => a + b;
// export const subNumber = (a, b) => a - b;

 const addNumber = (a, b) => a + b;
 const subNumber = (a, b) => a - b;

 export {
    addNumber,
    subNumber,
    BRAND as brand
 }

```
### step 318:
```javascript
// Promises
const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve("data back from the server")
    }, 3000)
    setTimeout( () => {
    reject("failed to get data from server")
    }, 2000)
});
promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
        console.log("done")
    })   
```
### step 319:
```javascript
// Promises
console.log("synchronous 1");

const promise = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1_000_000_000) {
      i++;
    }
    resolve("data back from the server");
  });
});

// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//     resolve("data back from the server")
//     }, 3000)
//     setTimeout( () => {
//     reject("failed to get data from server")
//     }, 2000)
// });

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });

  console.log("synchronous 2");
```
### step 320:
```javascript
// Async Await
const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 5_000_000_000) i++;
    resolve([
      { name: "nila", id: 1 },
      { name: "Bob", id: 1 },
    ]);
  });
});
const addresses = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    reject("oops error")
    let i = 0;
    while (i < 2_000_000_000) i++;
    resolve([
      { customerId: 1, address: "London" },
      { customerId: 2, address: "USA" },
    ]);
  });
});

// const fetchData = () => {
//   customers
//     .then((c) => {
//       addresses
//         .then((a) => {
//           console.log(c);
//           console.log(a);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const fetchData = async () => {
  try {
    const c = await customers;
    const a = await addresses;
    console.log(c);
    console.log(a);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

```
### step 321:
```javascript
// Async Await
const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 5_000_000_000) i++;
    resolve([
      { name: "nila", id: 1 },
      { name: "Bob", id: 1 },
    ]);
  });
});
const addresses = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    reject("oops error")
    let i = 0;
    while (i < 2_000_000_000) i++;
    resolve([
      { customerId: 1, address: "London" },
      { customerId: 2, address: "USA" },
    ]);
  });
});

// const fetchData = () => {
//   customers
//     .then((c) => {
//       addresses
//         .then((a) => {
//           console.log(c);
//           console.log(a);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const fetchData = async () => {
//   try {
//     const c = await customers;
//     const a = await addresses;
//     console.log(c);
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// };
const fetchData = async () => {
  try {
    const values = await Promise.all(customers, addresses);
    console.log(c);
    console.log(a);
  } catch (error) {
    console.log(error);
  }
};

fetchData();

```
### step 322:
refer https://api.chucknorris.io/
refer https://github.com/axios/axios
```javascript
// Promise example
import axios from 'axios';

// Using Promises
// axios.get("https://api.chucknorris.io/jokes/random")
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// Using async/await
const fetchJoke = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res.data);  // This will print the joke data from the API
  } catch (error) {
    console.log(error);  // This will log any error that occurs during the request
  }
}

// Fetch the joke using the correct API URL
fetchJoke("https://api.chucknorris.io/jokes/random");

```
### step 323:
javascript is piece of cake next step is starting react
### step 324:
refer https://react.dev/
### step 325:
refer https://vite.dev/
### step 326:

### step 327:
### step 328:
### step 329:
### step 330:
