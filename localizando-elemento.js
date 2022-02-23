
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const medias = [10, 7, 9, 6];

let listaFinal = [alunos, medias];

const exibeNomeNota  = (nomeDoAluno) => {
    if (listaFinal[0].includes(nomeDoAluno)){
        let indice = listaFinal[0].indexOf(nomeDoAluno)
        console.log(`Indice: ${indice}`);
        return `${listaFinal[0][indice]}, sua média é ${listaFinal[1][indice]}`;
    } else{
        return "Aluno não cadastrado";
    }
}
//includes -> booleano (true or false)
// index -> indexOf (number) [0], [1], [2]...

console.log(exibeNomeNota('Ana'));

