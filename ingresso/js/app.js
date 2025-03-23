function comprar(){
let tipo = document.getElementById('tipo-ingresso');
let qtd = parseInt(document.getElementById('qtd').value);


//alert(tipo); Teste
//alert(qtd); Teste

if(tipo.value == 'pista'){
comprarPista(qtd);

}

}
function comprarPista(qtd){
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); //recupera o número da pista no HTML
if(qtd > qtdPista){
    alert("Infelizmente os ingressos estao indisponiveis");
}else{
    qtdPista = qtdPista - qtd;
    document.getElementById('qdt-pista').textContent = qtdPista;
    alert("Ingresso comprado com sucesso!");

}

}