/*
Suppose the string "yak" is unlucky.
Given a string, return a version where all the "yak" are removed, but the "a" can be any char.
The "yak" strings will not overlap.*/


function stringYak(str: string): string {
    let result = '';

    for(let i = 0; i < str.length;) {
        if(str[i] === 'y' && str[i+2] === 'k') {
            i +=3;
        } else {
            result += str[i];
            i++;
        }
    }

    return result;

}

function stringYak_2(str: string): string {
    const unluckyString = 'yak';

    if(!str.includes(unluckyString)) return str;

    return str.replace(unluckyString, '');
}
