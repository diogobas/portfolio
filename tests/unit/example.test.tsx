import { describe, it, expect } from '@jest/globals';

/**
 * Example Unit Test Template
 * This demonstrates the testing structure for components
 */

describe('Example Test Suite', () => {
  it('should demonstrate basic test structure', () => {
    // Arrange: Set up test data
    const input = 5;
    const expected = 10;

    // Act: Perform the action
    const result = input * 2;

    // Assert: Verify the result
    expect(result).toBe(expected);
  });

  it('should handle edge cases', () => {
    expect(0 * 2).toBe(0);
    expect(-5 * 2).toBe(-10);
  });
});
