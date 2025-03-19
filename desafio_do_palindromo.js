//EXEMPLO DE FUNCION DECLARATION
function essaPalavraEUmPalindromo () {
    var palavra = "rever";
    var separandoAsLetraDaPalavra = palavra.split("") // função do js para quebrar as palavras em uma lista de arrays

   // console.log(separandoAsLetraDaPalavra);
    var palavraInvertida = separandoAsLetraDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if(palavra==palavraInvertida){
        console.log("A palavra "+ palavra + " é um palídromo!");
    }else{ 
        console.log("A palavra "+ palavra + "não é um palíndromo!");
    }
} ;
essaPalavraEUmPalindromo();

// EXEMPLO DE FUNCION EXPRESS
/*    const essaPalavraEUmPalindromo = function () {
    var palavra = "rever";
    var separandoAsLetraDaPalavra = palavra.split("") // função do js para quebrar as palavras em uma lista de arrays
    var palavraInvertida = separandoAsLetraDaPalavra.reverse();

    //console.log(separandoAsLetraDaPalavra);
   
    palavraInvertida = palavraInvertida.join("");
    if(palavra==palavraInvertida){
        console.log("A palavra"+ palavra + "É um palídromo!");
    }else{ 
        console.log("A palavra"+ palavra + "não é um palíndromo!");
    }
} */