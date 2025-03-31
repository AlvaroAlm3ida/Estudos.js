//Desafio 1: Crie uma função que valide se um número é positivo, negativo ou zero.
function validarNumero(numero){
    if (numero > 0){
        return "Positivo";
    }else if (numero > 0) {
        return "Negativo";
    }else{
        return "Zero";
    }
}
console.log(validarNumero(-1));

//Desafio 2: Implemente uma função que verifique se uma pessoa é maior de idade.
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(18))

//Desafio 3: Desenvolva uma função que valide se uma string é vazia ou não.
function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"))
console.log(validarString(""))

//Desafio 4: Crie uma função que determine se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025))

//Desafio 5. Implemente uma função que calcule a média de dois números, interrompendo a: execução se algum dos números não for válido.
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8,5))

//https://cursos.alura.com.br/course/logica-programacao-praticando-desafios/task/146028  Procurar práticar.