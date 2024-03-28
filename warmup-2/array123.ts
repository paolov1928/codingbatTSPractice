/*
Given an array of ints, return true if the sequence of numbers 1, 2, 3
appears in the array somewhere.
*/

export function array123(nums: number[]): boolean {
  const str = nums.join('');
  const has123Sequence = str.match('123');

  if (has123Sequence !== null && has123Sequence.length > 0) {
    return true;
  }

  return false;
}

export function array123_2(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
      return true;
    }
  }
  return false;
}
