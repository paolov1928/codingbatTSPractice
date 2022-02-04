/*
Given a string, take the first 2 chars and return the string with the 2 chars added at
both the front and back, so "kitten" yields"kikittenki".
If the string length is less than 2, use whatever chars are there.*/

function front22(str: string): string {
    const twoChars = str.substring(0, 2);

    return str.length < 2 ? str.repeat(3) : twoChars + str + twoChars;


    // if (str.length < 2) {
    //   return str.repeat(3);
    // }
    //
    // const twoChars = str.substring(0, 2);
    //
    // return twoChars + str + twoChars;
}
