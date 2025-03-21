let totalGeral;
limpar();

function adicionar(){
// recuperar valores, nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('$')[1];

//Calcular o preco, nosso subtotal
let preco = quantidade * valorUnitario;

// Adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`);

// Atualizar o valor total
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;

}
function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent = 'R$ 0'; // Deixa zerado o total
}
