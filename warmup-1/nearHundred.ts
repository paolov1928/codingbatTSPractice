/*
Given an int n, return true if it is within 10 of 100 or 200.
Note: Math.abs(num) computes the absolute value of a number.
*/


function nearHundred(n: number): boolean {
    return (n > 89 && n < 111) || (n > 189 && n < 211);
}
