/* 1. Write a JavaScript function to clone an array. */
let city1 = ["Sarajevo", "Zenica", "Vitez"];
console.log(city1);

let city2 = city1.concat();
console.log(city2);

/* 2. Write a JavaScript function to remove duplicate items from an array (5 and '5' are considered duplicates). */

var numbers = [1, 2, "1", 3, 4, 5, 2, 6, 3, 4, "5"];
console.log(numbers);

function removeDuplicate(numbers) {
    var newNumbers = {};
    numbers.forEach(function(i) {
        if (!newNumbers[i]) {
            newNumbers[i] = true;
        }
    });
    return Object.keys(newNumbers);
}

console.log(removeDuplicate(numbers));

/* 3. Write a JavaScript function to merge two arrays and removes all duplicates elements. */

let array1 = ['a', 'b', 'c'];
let array2 = ['c', 'c', 'd', 'e'];
let array3 = array1.concat(array2);
array3 = [...new Set([...array1, ...array2])];