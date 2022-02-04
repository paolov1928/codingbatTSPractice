/*
* Given two int values, return their sum. Unless the two values are the same,
* then return double their sum.*/

function sumDouble(a: number, b: number): number {
    const sum = a + b;
    if (a === b) {
        return sum * 2;
    }
    return sum;
}
