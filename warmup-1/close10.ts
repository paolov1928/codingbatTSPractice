/*
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
Note that Math.abs(n) returns the absolute value of a number.*/

function close10(a: number, b: number): number {
    const aDifference = Math.abs(10 - a);
    const bDifference = Math.abs(10 - b);

    if (aDifference === bDifference) {
        return 0;
    }

    return aDifference > bDifference ? b : a;
}
