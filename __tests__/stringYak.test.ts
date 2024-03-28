import { stringYak, stringYak_2 } from '../warmup-2/stringYak';

describe('stringYak function i.e. using a FOR loop', () => {
  test('Test 1: Should remove "yak" from string', () => {
    expect(stringYak('aaaaa')).toBe('aaaaa');
  });

  test('Test 2: Should remove "yak" from string with "yak" at the middle', () => {
    expect(stringYak('aayakaaa')).toBe('aaaaa');
  });

  test('Test 3: Should remove "yak" from string with "yak" at the end', () => {
    expect(stringYak('aayXkaaa')).toBe('aaaaa');
  });

  test('Test 4: Should remove "yak" from string with mixed case and extra characters', () => {
    expect(stringYak('xxyAkYAKa')).toBe('xxa');
  });

  test('Test 5: Should return the same string if "yak" is not present', () => {
    expect(stringYak('d')).toBe('d');
  });

  test('Test 6: Should return an empty string if input is an empty string', () => {
    expect(stringYak('')).toBe('');
  });

  test('Test 7: Should return an empty string if input is an empty string', () => {
    expect(stringYak('')).toBe('');
  });
});

describe('stringYak_2 function i.e. using REGEX', () => {
  test('Test 1: Should remove "yak" from string', () => {
    expect(stringYak_2('aaaaa')).toBe('aaaaa');
  });

  test('Test 2: Should remove "yak" from string with "yak" at the middle', () => {
    expect(stringYak_2('aayakaaa')).toBe('aaaaa');
  });

  test('Test 3: Should remove "yak" from string with "yak" at the end', () => {
    expect(stringYak_2('aayXkaaa')).toBe('aaaaa');
  });

  test('Test 4: Should remove "yak" from string with mixed case and extra characters', () => {
    expect(stringYak_2('xxyAkYAKa')).toBe('xxa');
  });

  test('Test 5: Should return the same string if "yak" is not present', () => {
    expect(stringYak_2('d')).toBe('d');
  });

  test('Test 6: Should return an empty string if input is an empty string', () => {
    expect(stringYak_2('')).toBe('');
  });

  test('Test 7: Should return an empty string if input is an empty string', () => {
    expect(stringYak_2('')).toBe('');
  });
});
