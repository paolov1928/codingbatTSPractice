/*
Given an array of ints, return true if the sequence of numbers 1, 2, 3
appears in the array somewhere.
*/

function arrayFront9(nums: number[]): boolean {
    const sequence = '123'
    let str = nums.join('');

    for(let i = 0; i< str.length; i++) {
        if(str.substring(i, i+3) === sequence) {
            return true;
        }
    }

    return false;
}


function arrayFront9_2(nums: number[]): boolean {
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] === 1 && nums[i+1] === 2 && nums[i+2] === 3) return true;
    }

    return false;
}


console.log(arrayFront9([1, 1, 2, 3, 1])) //true
console.log(arrayFront9([1, 1, 2, 4, 1])) //false
console.log(arrayFront9([1, 1, 2, 1, 2, 3])) //true
