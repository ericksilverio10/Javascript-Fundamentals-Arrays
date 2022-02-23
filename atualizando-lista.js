const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 
'Marjorie', 'Leo']

listaDeChamada.splice(1, 2, 'Rodrigo');
// 1º Parâmetro: Remover a partir de qual índice? [1] 'Ana'
// 2º Parâmetro: Remover quantos índices a partir do primeiro? [2] 'Ana', 'Caio'
// 3º Parâmetro: Adicionar algum elemento: 'Rodrigo' (Opcional)

console.log(`Lista de chamada: ${listaDeChamada}`);
   