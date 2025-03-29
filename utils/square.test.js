// Unit test - stored in square.test.js
// First we import the square function
const { square } = require('./square');
// ++ Try creating a second function in square.js called
// squareRoot, then test that too!

// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
describe("Square utils", () => {
    test('square 5 to get 25', () => {
        expect(square(5)).toBe(25);
    });
    test('handles null', () => {
        expect(square(null)).toBe(0);
    });
    test('pass 5 as a string', () => {
        expect(square("5")).toBe(25);
    });
});

// Describe what is the context for this set of test
// Test what is describing 

