import { array123, array123_2 } from '../warmup-2/array123';

describe('array123 function', () => {
  test('Test 1: Should return true for array [1, 1, 2, 3, 1]', () => {
    expect(array123([1, 1, 2, 3, 1])).toBe(true);
  });

  test('Test 2: Should return false for array [1, 1, 2, 4, 1]', () => {
    expect(array123([1, 1, 2, 4, 1])).toBe(false);
  });

  test('Test 3: Should return true for array [1, 1, 2, 1, 2, 3]', () => {
    expect(array123([1, 1, 2, 1, 2, 3])).toBe(true);
  });

  test('Test 4: Should return false for array [1, 2]', () => {
    expect(array123([1, 2])).toBe(false);
  });

  test('Test 5: Should return true for array [1, 1, 2, 3, 1, 2, 3]', () => {
    expect(array123([1, 1, 2, 3, 1, 2, 3])).toBe(true);
  });

  test('Test 6: Should return true for array [1, 2, 3]', () => {
    expect(array123([1, 2, 3])).toBe(true);
  });

  test('Test 7: Should return false for array [3, 2, 1]', () => {
    expect(array123([3, 2, 1])).toBe(false);
  });

  test('Test 8: Should return false for array [1, 1, 2]', () => {
    expect(array123([1, 1, 2])).toBe(false);
  });

  test('Test 9: Should return false for array [1]', () => {
    expect(array123([1])).toBe(false);
  });

  test('Test 10: Should return false for empty array', () => {
    expect(array123([])).toBe(false);
  });

  test('Test 11: Should return true for array [1, 2, 3, 1, 2, 3]', () => {
    expect(array123([1, 2, 3, 1, 2, 3])).toBe(true);
  });

  test('Test 12: Should return true for array [1, 2, 1, 2, 1, 2, 3]', () => {
    expect(array123([1, 2, 1, 2, 1, 2, 3])).toBe(true);
  });

  test('Test 13: Should return false for array [3, 2, 1, 3, 2, 1]', () => {
    expect(array123([3, 2, 1, 3, 2, 1])).toBe(false);
  });

  test('Test 14: Should return true for array [1, 2, 3, 1, 2, 1, 2, 3]', () => {
    expect(array123([1, 2, 3, 1, 2, 1, 2, 3])).toBe(true);
  });

  test('Test 15: Should return true for array [1, 2, 1, 2, 3, 1, 2, 3]', () => {
    expect(array123([1, 2, 1, 2, 3, 1, 2, 3])).toBe(true);
  });

  test('Test 16: Should return true for array [1, 2, 3, 1, 2, 3, 4, 5]', () => {
    expect(array123([1, 2, 3, 1, 2, 3, 4, 5])).toBe(true);
  });

  test('Test 17: Should return false for array [5, 4, 3, 2, 1]', () => {
    expect(array123([5, 4, 3, 2, 1])).toBe(false);
  });

  test('Test 18: Should return false for array [3, 1, 2]', () => {
    expect(array123([3, 1, 2])).toBe(false);
  });

  test('Test 19: Should return true for array [1, 2, 3, 2, 1]', () => {
    expect(array123([1, 2, 3, 2, 1])).toBe(true);
  });

  test('Test 20: Should return false for array [1, 2, 4, 3]', () => {
    expect(array123([1, 2, 4, 3])).toBe(false);
  });

  test('Test 21: Should return true for array [1, 2, 3, 4, 1, 2, 3]', () => {
    expect(array123([1, 2, 3, 4, 1, 2, 3])).toBe(true);
  });

  test('Test 22: Should return false for array [3, 2, 1, 0]', () => {
    expect(array123([3, 2, 1, 0])).toBe(false);
  });

  test('Test 23: Should return true for array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(array123([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true);
  });

  test('Test 24: Should return true for array [0, 1, 2, 3, 5, 6, 7, 8, 9]', () => {
    expect(array123([0, 1, 2, 3, 5, 6, 7, 8, 9])).toBe(true);
  });

  test('Test 25: Should return true for array [1, 2, 3, 1, 2, 3, 1, 2, 3]', () => {
    expect(array123([1, 2, 3, 1, 2, 3, 1, 2, 3])).toBe(true);
  });
});

describe('array123 function performance comparison', () => {
  test('Measure execution time for array123 implementation using string manipulation', () => {
    const startTime = performance.now();

    // Call the array123 implementation using string manipulation
    array123([1, 1, 2, 3, 1]);

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.log(
      `Execution time for array123 using string manipulation: ${executionTime} milliseconds`
    );
  });

  test('Measure execution time for array123_2 implementation using direct comparison', () => {
    const startTime = performance.now();

    // Call the array123_2 implementation using direct comparison
    array123_2([1, 1, 2, 3, 1]);

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.log(
      `Execution time for array123_2 using direct comparison: ${executionTime} milliseconds`
    );
  });
});

// String manipulation is always faster! interesting 'array123' is faster than 'array123_2'

/* The difference in execution times between the two implementations could be due to several factors:

Algorithm Complexity: The string manipulation approach may have a simpler algorithmic complexity compared to direct comparison. Converting the array to a string and using string methods to search for the sequence might be more efficient than iterating through the array and performing direct element comparisons.

Optimization: JavaScript engines are optimized for certain types of operations. String manipulation operations might be optimized by the JavaScript engine, leading to faster execution times.

Data Size: The performance difference might be more noticeable with larger input arrays. If the input arrays are small, the overhead of string manipulation might be negligible compared to the direct comparison approach. However, with larger arrays, the efficiency of the algorithms becomes more critical.

Implementation Details: The specific implementation of the functions could also affect performance. For example, the string manipulation approach might be implemented more efficiently or leverage built-in JavaScript optimizations.

System Load: Execution times can also be influenced by other processes running on the system at the same time. If the system is under heavy load, it might affect the execution times of the functions differently.

Overall, while string manipulation might seem counterintuitive for this problem, it's important to consider that JavaScript engines are highly optimized and sometimes seemingly unconventional approaches can be more efficient in practice. However, it's always a good idea to profile and benchmark different implementations to ensure optimal performance for a specific use case. */
