let totalGeral;
limpar();

function adicionar(){
// recuperar valores, nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;

//verifica se o produto selecionado é valido
if (!produto || produto.trim()=== ""){  // o método trim(), que remove os espaços desnecessários de uma string.
    alert("Selecione um produto válido.");
}

//verifica se a quantidade inserida é valida
if(isNaN(quantidade) || quantidade <=0){    // O método Number.isNaN() é usado para verificar se um valor é NaN, ou seja, Not a Number. 
    alert("Insira uma quantidade válida."); 
    return;
}

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
