function adicionar(){
// recuperar valores, nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade');
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('$')[1];

alert(nomeProduto);
//alert(quantidade.value);Teste

//Calcular o preco, nosso subtotal
let preco = quantidade.value * valorUnitario;
alert(preco);
// Adicionar no carrinho
// Atualizar o valor total

}
function limpar(){

}
