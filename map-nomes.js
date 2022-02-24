//Deixando as strings de uma array maiusculas
let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesAtualizados = nomes.map(nome => nome.toLocaleUpperCase());

console.log(nomesAtualizados);
//[ 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA' ]


//Multiplicando números de uma array por 10
const arrayNums = [1, 2, 3, 4];
const numerosMultiplicados = arrayNums.map(numero => numero * 10);

console.log(numerosMultiplicados);
//[ 10, 20, 30, 40 ]