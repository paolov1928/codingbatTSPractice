/*
Given a string, return a version where all the "x" have been removed.
Except an "x" at the very start or end should not be removed.
*/

function stringX(str: string): string {
    const filteredStringPart = str.substring(1, str.length-1).split('').filter(x => x != 'x').join('');
    return str[0] + filteredStringPart + str[str.length-1];
}

console.log(stringX('xxHxix')) // xHix
console.log(stringX('abxxxcd')) // abcd
console.log(stringX('xabxxxcdx')) // xabcdx
