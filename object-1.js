// Initialize an array with these numbers, (1,2,3,4,5,6,7,8). Iterate over the array and print the numbers greater than 4 from this list.
const arr1 = [1,2,3,4,5,6,7,8]
let newArray = [];
for (let i = 4; i < arr1.length; i++) {
    newArray.push(i);
}
console.log(newArray);


// Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"]
const local = myColor.toLocaleString()
console.log(local);

// Write a JavaScript program to sort the items of an array

let arr2 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
arr2.sort(function(a, b) {
    return a - b;
});
console.log(arr2);
// Write a JavaScript program to compute the sum and product of an array of integers.
const arr3 = [10, 20, 30, 40]
let sum =0;
let product = 1;

arr3.forEach(function(num) {
    sum = sum+num;
    product = product * num
})
console.log(`sum - ${sum}, product - ${product}`);
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const good = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const foof = good.filter(function(h) {
    return h;
})
console.log(foof);


// Write a JavaScript function to remove a specific element from an array.
const arr4 = [2, 5, 9, 6];
arr4.splice(1,1)
console.log(arr4);

// Write a function to find the product of elements of an array using the filter method.

const myArray = [10, 20, 30, 40]
let products = 1;
myArray.filter((arry) => {
    products = products * arry
})
console.log(`product - ${products}`);

// Square and sum the array elements using the arrow function and then find the average of the array.


