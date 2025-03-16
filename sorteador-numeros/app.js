function sortear(){
let quantidade = parseInt(document.getElementById('quantidade').value); // ao colocar na variável .value significa que vai ser pego o que esta no ID e trazer como valor não string
let de = parseInt(document.getElementById('de').value); 
let ate = parseInt(document.getElementById('ate').value); 

let sorteados = [];
let numero;

if(quantidade> (ate - de+1)){
    alert("O Campo QUANTIDADE deve ser menor ou igual ao intervalo informado no campo do número até o campo até o número");
    return;
} else{
for (let i = 0; i < quantidade; i++){
numero = obterNumeroAleatorio(de,ate);

while (sorteados.includes(numero)){
    numero = obterNumeroAleatorio(de,ate);
}
}
sorteados.push(numero);
}

let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
alterarStatusDoBotao();
}

function obterNumeroAleatorio(min,max){
return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ''; 
    document.getElementById('de').value = '' ;
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusDoBotao();
}

if(de >= ate) { 
    alert("Campo do número deve ser inferior ao campo até o número. Verifique!");
  
}