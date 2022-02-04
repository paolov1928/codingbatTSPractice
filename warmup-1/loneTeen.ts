/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive.
Given 2 int values, return true if one or the other is teen, but not both.*/

function loneTeen(a: number, b: number): boolean {
    const aTeen = a >= 13 && a <= 19;
    const bTeen = b >= 13 && b <= 19;

    return (aTeen && !bTeen) || (!aTeen && bTeen);
}
