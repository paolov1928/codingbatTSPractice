/*
Return true if the given string contains between 1 and 3 'e' chars.*/

function stringE(str: string): boolean {
    let eCounter = 0;
    for(let i = 0; i <= str.length; i++) {
        if(str[i] === 'e') eCounter++;
    }

    return eCounter <=3;
}
