/*
Given 2 strings, a and b, return the number of the positions where they contain
the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx",
"aa", and "az" substrings appear in the same place in both strings.
*/

function stringMatch(a: string, b: string): number {
    let counter = 0;
    const str =  a.length > b.length ? a : b;
    for(let i = 0; i < str.length-1; i++) {
        const aSubst = a.substring(i, i+2);
        const bSubst = b.substring(i, i+2);
        if(aSubst === bSubst) {
            counter++;
        }

    }

    return counter;
}

console.log(stringMatch("xxcaazz", "xxbaaz")) //3
console.log(stringMatch("abc", "abc")) //2
console.log(stringMatch("abc", "axc")) //0
console.log(stringMatch("aabbccdd", "abbbxxd")) //1
