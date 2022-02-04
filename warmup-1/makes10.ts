/*
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.*/

function makes10(a: number, b: number): boolean {
    const sum = a + b;
    if (a === 10 || b === 10 || sum === 10) {
        return true;
    }

    return false;

}
