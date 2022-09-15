



//  Write an arrow function expression called greet(). It should accept a single argument representing a person's name. It should return a greeting string as shown below:

const greet = (ele) => {
    console.log(`hey ${ele}!`)
}
greet('Hagrid');

// Transform this function to an arrow function:
// const sum = (num1, num2) => {
//     return num1 + num2
// }
const sum = (num1, num2) => num1 + num2
console.log(sum(40,2))
sum(42,0)
// Write one simple condition using a ternary operator 
let age = (ele) => {
   (ele >= 18) ? console.log('u are egiable') : console.log('u r not egiagle');
}
age(16);
// Create a function called “printWelcomeMessage” that will take objects as an argument and print “I am ${name} and my age is ${age}” in the console.

const myName = {
    name : "John",
	age: 40,
    // printWelcomeMessage :function() {
    //     return (` I am ${this.name} and my age is ${this.age}`)
    // }

}
// console.log(myName.printWelcomeMessage())
const printWelcomeMessage = (myName) => {
    console.log(` I am ${myName.name} and my age is ${myName.age}`)
}
printWelcomeMessage(myName)

// // Create two objects. Assign the first object as the prototype of the second. Print all the properties inside the second object.(Including the properties included from the first object)

const food = {
    name : 'gi',
    age: 43,
    place: 'bangalore',
    state: 'karnataka'
}

const myArray = {
    name : 'li',
    age: 34,
    place: 'mumbai',
    pincode: 75836
}
// const press = {...myArray, ...food}
// console.log(press)
myArray.__proto__=food
console.log(food.pincode);
// Get data from this API, https://restcountries.com/ and print the result in the console.
const baseLink = 'https://restcountries.com/v2/all';
fetch(baseLink)
  .then((response) => {
    response.json()})
  .then((data) => {
    console.log(data)})
   .catch((error) => {
     console.log(error);
    })
    .finally(() => {
        console.log('finally exutidet')
    })   
// Create a function unique(arr) that should return an array with unique items of arr.(Use Set to get the unique elements) Example: 
let values = ["John", "Mark", "John", "Mark","Mark", "Mark", "John", "John", "sam"]; 

let doo = new Set(values);
console.log(doo)

// Destructure the below array and object,
let arr = ["John", "Smith"]
console.log(...arr)
let [first, second] = [...arr]
console.log(first, second);
let options = {
  title: "Menu",
  width: 100,
  height: 200
};
console.log({...options})

// Create a new promise which prints “Hello World” after 3 seconds. Add a success handler as well as error handler in the promise as well(then and catch block)
let a = true
const promise = new Promise((resolve, reject) => {
    if (a) {
    resolve(
         'hello world'
    )} else {
        reject(
            'error'
        )
    }

})
promise.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 3000);;
} ).catch((error) => {
    console.log(error)
})

// Convert the below JSON to string. 
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
const dee = JSON.stringify(student);
console.log(dee);


// Write a function printTime() that outputs the current time after every second.
const printTime = () => {
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        console.log(time)
    }, 1000);
}
printTime()
// Write a function which waits for the following API call to resolve, https://restcountries.com/ and then prints the result.( Use async/await )
async function getResponse () {
    let response= await fetch('https://restcountries.com/v2/all');
    let data = response.json();
    console.log(data);   
}
getResponse()

