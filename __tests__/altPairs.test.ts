import { altPairs } from '../warmup-2/altPairs';

describe('altPairs function', () => {
  test('should return "kien" for input "kitten"', () => {
    expect(altPairs('kitten')).toBe('kien');
  });

  test('should return "Chole" for input "Chocolate"', () => {
    expect(altPairs('Chocolate')).toBe('Chole');
  });

  test('should return "Congrr" for input "CodingHorror"', () => {
    expect(altPairs('CodingHorror')).toBe('Congrr');
  });
});
