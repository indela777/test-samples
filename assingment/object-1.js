// Initialize an array with these numbers, (1,2,3,4,5,6,7,8). Iterate over the array and print the numbers greater than 4 from this list.
const arr1 = [1,2,3,4,5,6,7,8] // [4, 3, 8, 7, 5, 2, 1]
let newArray = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]> 4) {
     newArray.push(i);
    }
}
console.log(newArray);


// Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"]
const local = myColor.join()
console.log(local);

// Write a JavaScript program to sort the items of an array

let arr2 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
arr2.sort(function(a, b) {
    // console.log(a,b);
    if (a > b) {
     return -1;
    } else if ( b > a) {
        return 1
    }
});
console.log(arr2);
// Write a JavaScript program to compute the sum and product of an array of integers.
const arr3 = [10, 20, 30, 40]
let sum =0;
let product = arr3.reduce(function( product, num) {
    return product * num
},1)
console.log(product);
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const good = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const foof = good.filter(function(h) {
    return h;
})
console.log(foof);


// Write a JavaScript function to remove a specific element from an array.
const arr4 = [2, 5, 9, 6];
arr4.splice(2,2)
console.log(arr4);

// Write a function to find the product of elements of an array using the filter method.

const myArray = [10, 20, 30, 40]
let products = 1;
myArray.filter((arry) => {
    products = products * arry
})
console.log(`product - ${products}`);

// Square and sum the array elements using the arrow function and then find the average of the array.

const food = [33, 45, 60]
let sum1 = 0;
let squre = [];
let average=0;
food.forEach((num) => {
    squre.push(num ** 2);
})
squre.forEach((num) => {
    sum1 = sum1 + num;
})
console.log(`${squre} and ${sum1}, and ${sum1/food.length}`)

// Create a new array using the map function whose each element is equal to the original element plus 4.

const elements = [40, 49, 50];
let hytr = elements.map((x) => {
    return x = x + 4;
})
console.log(hytr);

// Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following. Use console.log to display the results.
const array = [1,2,3,4,5,6,7,8,9,10]
// An array of odd numbers.

let myfood = array.filter((num) => {
    if (num % 2 !== 0) {
        return true;
    }
})
console.log(myfood)


// An array of numbers divisible by 2 or 5.
let myfoods = array.filter((num) => {
    if (num % 2 === 0 || num % 5 === 0) {
        return num
    }
})
console.log(myfoods)

// An array of numbers divisible by 3 and then squared those numbers.
let items = array.filter((num) => {
    if (num % 3 === 0) {
        return num
    }
    
})
console.log(items);

let square = items.map((num) => {
    return(num ** 2)
})
console.log(square);
// The sum of the following: square the numbers divisible by 5.
let square1 = [];
let items1 = array.filter((num) => {
    if (num % 5 === 0) {
        return num
    }
    
})
console.log(items1);

items1.filter((num) => {
    square1.push(num ** 2)
})
console.log(square1);

// Write a JavaScript program to list the properties of a JavaScript object.
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(Object.keys(student));
console.log(`${student.name},${student.sclass},${student.rollno}`);

// // document.getElementById('jsstyle').addEventListener('click', js_style = () => {
  

// // })
// let js_style = () => {
//     document.getElementsByClassName('text')[0].style.color = 'red'

// }


// // Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// document.getElementById('text').style.color = 'blue';


//  Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
let student1 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student1);
delete student1.rollno;
console.log(student1);
// Write a JavaScript function to split a string and convert it into an array of words.

let str = 'Robin Singh';
let mx = str.split();
console.log(mx);
// Write a JavaScript function to get the current date.
let date = new Date

console.log(date.toLocaleDateString());
