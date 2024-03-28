/*
Suppose the string "yak" is unlucky.
Given a string, return a version where all the "yak" are removed, but the "a" can be any char.
The "yak" strings will not overlap.*/

export function stringYak(str: string): string {
  let lowerCased = str.toLowerCase();
  //  loop through looking for where yak appears
  //  if y*a*k appears do not add any of its chars to the result string
  let outputStr = '';
  for (let i = 0; i < lowerCased.length; i++) {
    if (
      !(
        (lowerCased[i] === 'y' && lowerCased[i + 2] === 'k') ||
        (lowerCased[i - 1] === 'y' && lowerCased[i + 1] === 'k') ||
        (lowerCased[i - 2] === 'y' && lowerCased[i] === 'k')
      )
    ) {
      outputStr += str[i];
    }
  }
  return outputStr;
}

export function stringYak_2(str: string): string {
  return str.replace(/y.k/gi, '');
}
