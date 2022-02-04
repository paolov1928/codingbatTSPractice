/*
Return true if the given string begins with "mix",
except the 'm' can be anything, so "pix", "9ix" .. all count*/

function mixStart(str: string): boolean {
    return str.substring(1, 3) === 'ix';
}
