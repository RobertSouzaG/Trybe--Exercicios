let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorN = 100;
let menorN = maiorN

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorN) {
     menorN = numbers[index];
    }  
}

console.log(menorN);
