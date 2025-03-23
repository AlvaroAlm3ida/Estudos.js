function adicao(a,b){
    return a + b;
}
function subtracao(a,b){
    return a-b;
}
function multiplicacao(a,b){
    return a * b;
}
function divisao(a,b){
    if(b !== 0 ){   // Verifica se b não é zero
        return a/b  // se b não for zero, retorna a divisão de a por b
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao,a,b){
    switch (operacao){
        case 'soma':
            return adicao(a,b);
        case 'subtracao':
            return subtracao(a,b);
        case 'multiplicao':
            return multiplicacao(a,b);
        case 'divisao':
            return divisao(a,b);
        default:
            return "Operação inválida.";
    }

}

// exemplo de uso
let resultado = calculadora ('soma',5,3);
console.log(resultado);