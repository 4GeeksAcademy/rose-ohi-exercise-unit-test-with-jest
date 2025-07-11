const fromDollarToYen = function(valueInDollar) { 
    // Example conversion rate: 1 USD = 156.5 JPY
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}
console.log(fromDollarToYen(10)); // Outputs: 1565

const fromEuroToDollar = function(valueInEuro) {
    // Example conversion rate: 1 EUR = 1.07 USD
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
console.log(fromEuroToDollar(10)); // Outputs: 10.7

const fromYenToPound = function(valueInYen) {
    // Example conversion rate: 1 JPY = 0.0055 GBP
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}
console.log(fromYenToPound(10)); // Outputs: .055


module.exports = {
    fromDollarToYen, fromEuroToDollar, fromYenToPound,
};



/*

// FIRST TEST//////////////////
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };
*/

