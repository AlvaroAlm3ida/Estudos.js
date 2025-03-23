function converterTemperatura(valor,escala){
    if (escala.toLowerCase() === 'celsius'){
        return (valor * 9/5) + 32; //Celsius para fahrenheit
    }else if (escala.toLowerCase()=== 'fahrenheit'){
        return(valor - 32) * 5/9; // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

//let temperaturaParaCelsius = 25;
//let temperaturaFahrenheit = converterTemperatura(temperaturaParaCelsius,'celsius');
let temperaturaFahrenheit = 35;
let temperaturaParaCelsius = converterTemperatura(temperaturaFahrenheit, 'fahrenheit');

//console.log(temperaturaFahrenheit);
console.log(temperaturaParaCelsius);

