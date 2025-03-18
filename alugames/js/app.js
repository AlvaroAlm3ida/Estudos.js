let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nameGame = gameClicado.querySelector('.dashboard__item__name');

    //alert(nameGame.textContent); TESTE

    if(imagem.classList.contains('dashboard__item__img--rented')){
            //adicionando uma confirmação antes de devolver o jogo
        if(confirm(`Você tem certeza que deseja devolver o jogo? ${nameGame.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented')
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

    contarEExibirJogosAlugados();
}

//Inicializar a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded',function(){

    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();

});

function ordenarNumeros(a,b,c){
    const numerosOrdenados = [a,b,c].sort((x,y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

//Exemplo de uso:
ordenarNumeros (3,1,5); //Deve exibir "Números ordenados: 1,3,5"