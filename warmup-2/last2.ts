/*
Given a string, return the count of the number of times that a substring length 2
appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1
(we won't count the end substring).
*/

function last2(str: string): number {
    if(str.length <=2) return 0;

    let counter = 0;
    const strToCompare = str.substring(str.length-2, str.length);

    for(let i = 0; i < str.length-2; i++) {
        if(str.substring(i, i+2) === strToCompare) {

            counter++;
        }
    }

    return counter;
}

console.log(last2('hixxhi')) //1
console.log(last2('xaxxaxaxx')) // 1
console.log(last2('axxxaaxx')) //2
console.log(last2('1717171')) //2
console.log(last2('xxxx')) //2
