/*
Given a string,
return a new string made of every other char starting with the first, so "Hello" yields "Hlo".
*/


function stringBits(str: string): string {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(i % 2 == 0) {
            result += str[i];
        }
    }

    return result;
}

function stringBits2(str: string): string {
    let result = '';

    for(let i = 0; i < str.length; i +=2) {
        result += str[i];
    }

    return result;
}

console.log(stringBits('Hello')) // "Hlo"
console.log(stringBits('Hi')) // "H"
console.log(stringBits('Heeololeo')) // Hello
console.log(stringBits('HiHiHi')) // "HHH"
console.log(stringBits('')) // ""
console.log(stringBits('Greetings')) // Getns
