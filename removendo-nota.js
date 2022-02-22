const notas = [10, 7, 8, 5, 10];
notas.pop() //Remove o último índice do array
console.log(notas);
//[10, 7, 8, 5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Sua média é ${media}`);
//7.5
