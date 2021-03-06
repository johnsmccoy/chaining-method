// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console)
// the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// const finalIntegers = integers
// .sort((a,b) => b - a)
// .filter(currentInteger => currentInteger <= 19)
// .map(i =>(i * 1.5) - 1)
// .reduce((first, second) => first + second)


const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

const chained = integers.sort((a,b) => a-b).reverse().filter(int =>{return((int <= 19))}).map(function (int){return ((int * 1.5) -1)})

console.log(chained.reduce(function (total, current){return total += current}, 0))