/*
Given an array of ints, return the number of 9's in the array.
*/

function arrayCount9(nums: number[] ): number {
    return nums.filter(n => n === 9).length;
}

function arrayCount9_2(nums: number[] ): number {
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 9) {
            counter++;
        }
    }

    return counter;
}


console.log(arrayCount9([1,2,9])) // 1
console.log(arrayCount9([1, 9, 9, 3, 9])) // 3
console.log(arrayCount9([1,2])) // 0
