// // Write a JavaScript program to get the integers in range (x, y)

// let food = (num1, num2) => {
//     let good =[]
//     for( i = num1; i < num2; i++) {
//         good.push(i);

//     }
//     return good
    
// }
// console.log(food(2, 45));

// // Write a JavaScript function to check whether a string is blank or not.

// let car =  function(thing) {
//     if (thing.length === 0)
//     return false;
//     else 
//     return true;
//   }
// console.log(car(''));
// console.log(car('vinod'));

// // Write a JavaScript function to split a string and convert it into an array of words.
// let arr1 = function (str) {
//     return str.trim().split(" ");
// };

// console.log(arr1("Robin Singh"));


// Write a JavaScript function to capitalize the first letter of a string.

// let arr2 = function(str1){
//     return str1.charAt(str1.length -1).toUpperCase();
// }
// console.log(arr2('go to school'));
// Write a JavaScript program to test if the first character of a string is uppercase ornot.*
const myName = (str) => {
    let result = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            result=true;
        }
        
    }
    console.log(result)

}
myName('fhnddj')
myName('JDdmkdd')

// const myname = (str) => {
//     let result = false;
//     for(let i = 0; i <= str.lenght; i++){
//         if(str.charAt(i) !== str.charAt(i).toUpperCase()) {
//             result= true;
//         }

//     }
//     console.log(result);

//     // var newStr = str.toLowerCase();
//     // if(str===newStr){
//     //     console.log('it\'s in lowerCase');
//     // }
//     // else{
//     //     console.log('it\'s not in lowerCase');
//     // }
// }
// myname('satrstr');
// myname('Satrstr');

// // Write a JavaScript function to count the number of vowels in a given string.

// function vowels(str) {
//     let vowelsCount = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//       if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
// }
// console.log(vowels('icecream'));

//  Write a JavaScript program to list the properties of a JavaScript object.Sampleobject:var student = {name : "David Rayy",sclass : "VI",rollno : 12 };Sample Output: name,sclass,rollno *
  
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12

}
console.log(Object.keys(student));
//  Write a JavaScript program to display the reading status (i.e. display book name,author name and reading status) of the following books.

// var library = [
//         {
//             author: 'Bill Gates',
//             title: 'The Road Ahead',
//             readingStatus: true
//         },{
//             author: 'Steve Jobs',
//             title: 'Walter Isaacson',
//             readingStatus: true
//         },{
//             author: 'Suzanne Collins',
//             title:  'Mockingjay: The Final Book of The Hunger Games',
//             readingStatus: false
//         }
//     ];
// let gift = library.map((list)=>{
//     return list.readingStatus;
// });  
// console.log(gift);
//You are given some names of different fruit and an unordered list html element;add a list item for each to the unordered list.<ul></ul>

// const fruits = ['apple', 'banana', 'tomato' ];
// let list = document.getElementById('write')
// fruits.forEach((items) => {
//     let li = document.createElement('li')
//     li.innerHTML=items;
//     list.appendChild(li)
// });

// Add the CroCoder logo (image element) as a child element to the existing divelement.<div></div>const imageSrc = 'https://crocoder.dev/icon.png';*

let get = document.getElementById('well')
let my = document.createElement('img')
my.src= 'https://crocoder.dev/icon.png'
get.appendChild(my);



// // Combine these two arrays using the spread operator,
// let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
// let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com','tommy@gmail.com'];
// console.log([...blog1Subscribers, ...blog2Subscribers])


// // Write a function which will take numbers as arguments and return their sum.(Userest operator as argument)*
let calculateSum = (...theArgs)=>{
    // console.log(theArgs);
    let sum = 0;
   for (let a of theArgs){
    console.log(a)
      sum += a;
   }
   return sum;


}
console.log(calculateSum(1));
console.log(calculateSum(1, 2, 3));
console.log(calculateSum(1, 2, 3, 4));

// Write a sample code explaining Promise.all.
// let p1 = new Promise(((resolve, reject)=> {
//     let complet = true
//     if (complet) {
//         resolve();
//     } else {
//         reject();
//     }
// }));

// let p2 = new Promise(((resolve, reject)=> {
//     let complet = true
//     if (complet) {
//         resolve();
//     } else {
//         reject();
//     }
// }));

// let p3 = new Promise(((resolve, reject)=> {
//     let complet = false;
//     if (complet) {
//         resolve();
//     } else {
//         reject();
//     }
// }));
// Promise.all([p1, p2, p3]).then(() => {
//     console.log('yes the plan is success')
// }).catch(() => {
//     console.log('error');
// });


// What is the output of below code ? Explain


// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }});}
//         let promise = job(true);
//         promise.then(function(data) {
//             console.log(data);
//             return job(false);
//         }).catch(function(error) {
//             console.log(error);
//             return 'Error caught';
//         }).then(function(data) {
//             console.log(data);
//             return job(true);
//         }).catch(function(error) {
//             console.log(error);
//         });

// 1.Select the section with an id of container without using querySelector.
let sele = document.getElementById('container');
console.log(sele);
// // 2.Select the section with an id of container using querySelector.
let query = document.querySelector('#container');
console.log(query);
// // 3.Select all of the list items with a class of "second".
let clas = document.getElementsByClassName('second');
console.log(clas);
// // 4.Select a list item with a class of third, but only the list item inside of the ol tag.
let clae = document.getElementsByClassName('third')[1];
console.log(clae);
// // 5.Give the section with an id of container the text "Hello!"
sele.innerText = 'hello !'
// // 6.Create a new li element.
let li = document.createElement('li');
// Add the class main to the div with a class of footer.
let feb = document.createElement('div');
feb.classList.add('footer');
// Remove the class main on the div with a class of footer.
feb.classList.remove('footer');


// // Change the text in the first and the last list item element in every unorderedlist element on this page. Change it to 'first' and 'last'.
// let go = document.getElementsByClassName("firsts");
// for (let i = 0; i < go.length; i++) {
//     go[i].innerHTML = 'first'
// }
// let goes = document.getElementsByClassName('lat')
// for (let i = 0; i < goes.length; i++) {
//     goes[i].innerHTML = 'last'
// }
