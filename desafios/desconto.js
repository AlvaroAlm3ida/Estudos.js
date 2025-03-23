function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5 && quantidadeDeJogos < 10) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }
    
        return desconto;      
}   

console.log(calcularDescontoTotal(6));
console.log(calcularDescontoTotal(10));
console.log(calcularDescontoTotal(30));