/*
Given an array of ints, return true if one of the first 4 elements in the array is a 9.
The array length may be less than 4.
*/


function arrayFront9(nums: number[]): boolean {
    
    return true;
}

console.log(arrayFront9([1, 2, 9, 3, 4])) //true
console.log(arrayFront9([1, 2, 3, 4, 9])) //false
console.log(arrayFront9([1, 2, 3, 4, 5])) //false
console.log(arrayFront9([])) //false
console.log(arrayFront9([2])) //false
console.log(arrayFront9([9])) //true
