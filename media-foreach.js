const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
let somaDasNotas2 = 0;

//o forEach já faz um loop na array sem precisar fazer um for;
//callback
notas.forEach( nota =>{
    somaDasNotas += nota
})

//ou

notas.forEach( function(nota){
    somaDasNotas2 += nota;
})

let media = somaDasNotas / notas.length;

console.log(`Sua média é ${media}`);

const frutas =['melao', 'maca', 'laranja', 'morango'];

frutas.forEach(item => {
    if (item == 'laranja'){
       return console.log(`Eu NÃO gosto de ${item}!`);
    } else{
       return console.log(`Eu gosto de ${item}!`)
    }
})
