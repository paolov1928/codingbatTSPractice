/*Given two temperatures, return true if one is less than 0 and the other is greater than 100.*/

function icyHot(temp1: number, temp2: number): boolean {
    return ((temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100));
}
