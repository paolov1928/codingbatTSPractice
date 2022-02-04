/*Given a string, return a string made of the first 2 chars (if present), however include first char
only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".*/

function startOz(str: string): string {
    let finalString = '';

    if (str[0] === 'o') {
        finalString += 'o';
    }

    if (str[1] === 'z') {
        finalString += 'z';
    }

    return finalString;
}
