const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno, nota) => notas
[nota] < 5);
//true = retorna o elemento filtrado
//false = descarta o elemento

console.log(`Reprovados: ${reprovados}`);