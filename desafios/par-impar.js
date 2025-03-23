function verificarParOuImpar(numero){
    if(numero %2 === 0){    // verifica se o resto da divisão de numero 2 é igual a zero, significa que é par
        return "par";
    }else{
        return "ímpar";
    }

}

let numero = 5;
let resultadoParouImpar = verificarParOuImpar(numero);
console.log(resultadoParouImpar);