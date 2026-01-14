let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test that every element in the given array is a string
const allStrings = fruits.every(fruit => typeof fruit === 'string');
console.log('All elements are strings:', allStrings);

// b. Test that some of array elements starts with "a"
const someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
console.log('Some elements start with "a":', someStartWithA);

// c. Generate new array filtered from the given array 
// with only elements that starts with "b" or "s"
const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log('Filtered fruits (start with "b" or "s"):', filteredFruits);

// d. Generate new array each element of the new array contains 
// a string declaring that you like the given fruit element
const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log('Liked fruits:', likedFruits);