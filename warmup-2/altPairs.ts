/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".*/

export function altPairs(str: string): string {
  // Step 1: Split the input string into an array of characters
  const chars = str.split('');

  // Step 2: Use map to filter characters based on index conditions
  const filteredChars = chars.map((char, i) => {
    // Include characters at indices 0, 1, 4, 5, 8, 9, ...
    if (i % 4 === 0 || i % 4 === 1) {
      return char;
    }
    // Exclude other characters
    return '';
  });

  // Step 3: Join the filtered characters back into a string
  const result = filteredChars.join('');

  // Step 4: Return the resulting string
  return result;
}

console.log(altPairs('kitten')); //  "kien"
console.log(altPairs('Chocolate')); //  "Chole"
console.log(altPairs('CodingHorror')); //  "Congrr"
