// Array de duas dimensões
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const medias = [10, 7, 9, 6];

let listaFinal = [alunos, medias];

//listaFinal[0] = alunos
//listaFinal[0][0] = alunos[0] = 'João'

//listaFinal[1] = medias
//listaFinal[1][0] = medias[0] = 10

          //Lista alunos[0]                    //Lista medias[0]
console.log(`${listaFinal[0][0]}, sua média é ${listaFinal[1][0]}!`);
//João, sua média é 10!

console.log(`${listaFinal[0][1]}, sua média é ${listaFinal[1][1]}!`);
//Juliana, sua média é 7!