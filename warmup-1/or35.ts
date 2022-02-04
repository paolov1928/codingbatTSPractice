/*
Return true if the given non-negative number is a multiple of 3 or a multiple of 5*/

function or35(n: number): boolean {
    if (n % 3 === 0 || n % 5 === 0) {
        return true;
    }

    return false;
}
