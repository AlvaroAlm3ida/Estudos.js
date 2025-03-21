function capturarValores(){
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

    document.getElementById('mostrarNome').textContent = `Nome: ${nome}, Idade:${idade}`;
    console.log(`Nome: ${nome}, idade:${idade}`);
}
