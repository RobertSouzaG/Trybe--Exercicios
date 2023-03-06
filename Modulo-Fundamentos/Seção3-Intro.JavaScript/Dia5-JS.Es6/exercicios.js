  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'Luna'
  pessoa.idade = 19

//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

//   Atividade 2
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

// Atividade 3
const name = 'Adriana';
const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// Atividade 4
const numeroAleatorio = () => {
    return Math.random()
  };
//   console.log(numeroAleatorio());

// Atividade 5
let hello = (nome) => {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));

// Atividade 6
let speed = 90;
const speedCar = (speed) => (
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você ultrapassou o limite de velocidade`
);
console.log(speedCar(speed));




