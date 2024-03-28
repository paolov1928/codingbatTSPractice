/*
Given a string, return the count of the number of times that a substring length 2
appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1
(we won't count the end substring).
*/

function last2(str: string): number {

    return 1;
}

console.log(last2('hixxhi')) //1
console.log(last2('xaxxaxaxx')) // 1
console.log(last2('axxxaaxx')) //2
console.log(last2('1717171')) //2
console.log(last2('xxxx')) //2
