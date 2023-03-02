let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

let numI = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
 }
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numI += 1;
    }
} 

console.log(numI);

console.log(higherNumber);




