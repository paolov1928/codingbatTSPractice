/*
Given a non-empty string like "Code" return a string like "CCoCodCode".
*/


function stringSplosion(str: string): string {
    let result = '';
    for(let i = 0; i <= str.length; i++) {
        result += str.substring(0, i);
    }
    return result;
}

console.log(stringSplosion('Code')) // CCoCodCode
console.log(stringSplosion('abc')) // aababc
console.log(stringSplosion('ab')) // aab
console.log(stringSplosion('ab')) // aab
console.log(stringSplosion('Kitten')) // KKiKitKittKitteKitten
