function adicionar(){
let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');

if(lista.textContent == ''){
    lista.textContent = amigo.value;
}else{
    lista.textContent = lista.textContent + ', ' + amigo.value;
}

 // Limpa a caixa de adicionar após inserir um nome
amigo.value = '' ;             

}