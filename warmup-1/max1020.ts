/*
Given 2 positive int values, return the larger value that is in the
 range 10..20 inclusive, or return 0 if neither is in that range.*/


function max1020(a: number, b: number): number {
    if(!isInRange(a) && !isInRange(b)) return 0;

    let biggerNumber;

    if(b > a) {
        let tmp = a;
        a = b;
        b =tmp;
    }

    if(isInRange(a)) {
        return a;
    }

    if(isInRange(b)) {
        return b;
    }

    return 0;

    function isInRange(n: number): boolean {
        return n <= 20 && n >= 10;
    }
}
