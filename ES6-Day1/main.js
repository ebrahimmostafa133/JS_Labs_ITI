//1-Swap the values of two variables using destructuring 
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); 

//2Using rest parameter and spread operator return max value from any array of numbers
function findMinMax(...numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return { min, max };
}
const result = findMinMax(3, 5, 1, 8, 2);
console.log(`Min: ${result.min}, Max: ${result.max}`);