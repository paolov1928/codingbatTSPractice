/*
Given a non-empty string and an int N, return the string made starting with char 0,
and then every Nth char of the string.
So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.*/


function everyNth(str: string, n: number): string {
    let resultString = '';

    for(let i = 0; i<= str.length;) {
        resultString += str[i];
        i +=n;
    }

    return resultString;
}
