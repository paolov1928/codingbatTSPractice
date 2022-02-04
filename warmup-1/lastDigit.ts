/*Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57.
 Note that the % "mod" operator computes remainders, so 17 % 10 is 7.*/

function lastDigit(a: number, b: number): boolean {
    return a.toString()[a.toString().length-1] === b.toString()[b.toString().length-1];

    // return a % 10 === b % 10;
}
