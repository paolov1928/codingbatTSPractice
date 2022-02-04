/*Given an int n, return the absolute difference between n and 21,
 except return double the absolute difference if n is over 21.*/

function diff21(n: number): number {
    const difference = Math.abs(n - 21); // absolute difference, without -
    if (n > 21) {
        return difference * 2;
    }
    return difference;
}
