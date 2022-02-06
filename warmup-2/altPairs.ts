/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".*/

function altPairs(str: string): string {
    let result = '';

    for(let i = 0; i < str.length;) {
        result += str.substring(i, i+2)
        i +=4;
    }

    return result;
}


console.log(altPairs('kitten')) //  "kien"
console.log(altPairs('Chocolate')) //  "Chole"
console.log(altPairs('CodingHorror')) //  "Congrr"
