function comprar(){
let tipo = document.getElementById('tipo-ingresso');
let qtd = parseInt(document.getElementById('qtd').value);

//verificar se a quantidade é um número positivo
if (isNaN(qtd)|| qtd <=0){
    alert('Por favor, insira um quantidade válida');
    return;
}


//alert(tipo); Teste
//alert(qtd); Teste

if(tipo.value == 'pista'){
    comprarPista(qtd);  // Por fim, na função comprar(), você deve chamar a função comprarPista() caso o tipo de ingresso selecionado tenha sido do tipo pista:
}else if(tipo.value == 'superior'){
    comprarSuperior(qtd);
}else  {
    comprarInferior(qtd);
   
}

}
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); //recupera o número da pista no HTML
    if(qtd > qtdPista){
        alert("Infelizmente os ingressos estão indisponiveis para o tipo pista");
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista; //else deve decrementar a quantidade digitada
        alert("Ingresso comprado com sucesso!");

}

}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); //recupera o número da pista no HTML
    if(qtd > qtdSuperior){
        alert("Infelizmente os ingressos estão indisponiveis para o tipo Superior");
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior; //else deve decrementar a quantidade digitada
        alert("Ingresso comprado com sucesso!");

}

}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); //recupera o número da pista no HTML
    if(qtd > qtdInferior){
        alert("Infelizmente os ingressos estão indisponiveis para o tipo inferior");
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior; //else deve decrementar a quantidade digitada
        alert("Ingresso comprado com sucesso!");

}

}