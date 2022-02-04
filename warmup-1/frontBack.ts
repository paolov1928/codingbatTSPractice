/*
Given a string, return a new string where the first and last chars have been exchanged.*/


function frontBack(str: string): string {
    if (str.length <= 1) {
        return str;
    }

    const firstElement = str[0];
    const lastElement = str[str.length - 1];

    return lastElement + str.substring(1, str.length - 1) + firstElement;
}
