// Declarando uma variável do tipo array
let minhaLista = [];

//adicionando elementos com push
minhaLista.push(1,2,3,4);
console.log("adicionando elementos:",minhaLista);

//criando uma nova variável
let outrosNumeros = [5,6,7,8,8,8,8,8,8];

//concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando arrays:",novaLista);


//Removendo elementos com pop
novaLista.pop();
console.log("Desafio 4:", novaLista);

function embaralhaArrays(){
    for(let i = novaLista.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [novaLista[i], novaLista[j]] = [novaLista[j],novaLista[i]];

    }
    return novaLista;
}

//Embaralhando novaLista 
novaLista = embaralhaArrays(novaLista);
console.log("Embaralhando a lista" , novaLista);

// Função para remover duplicatas de um array

function removerDuplicatas(novaLista){
    return [...new Set(novaLista)];
}

// testando função com novaLista
let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:" , novaListaSemDuplicatas);