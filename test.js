/*
// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
}) */



// second Test - #2 --step 8

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('converts 10 dollars to yen correctly', () => {
    const result = fromDollarToYen(10);
    expect(result).toBeCloseTo(1565); // 10 * 156.5
})

test('converts 10 euros to dollars correctly', () => {
    const result = fromEuroToDollar(10);
    expect(result).toBeCloseTo(10.7); // 10 * 1.07
})

test('converts 10 yen to pounds correctly', () => {
    const result = fromYenToPound(10);
    expect(result).toBeCloseTo(0.055); // 10 * 0.0055
})

